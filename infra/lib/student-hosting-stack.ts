import * as cdk from 'aws-cdk-lib'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as s3 from 'aws-cdk-lib/aws-s3'
import { Construct } from 'constructs'

export class StudentHostingStack extends cdk.Stack {
  public readonly bucket: s3.Bucket
  public readonly distribution: cloudfront.Distribution

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // 1. Private S3 bucket storing each student's built projects under /<student-slug>/<project>/
    this.bucket = new s3.Bucket(this, 'StudentProjectsBucket', {
      bucketName: `cocc-cis295-projects-${this.account}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
      versioned: false,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    })

    // 2. CloudFront viewer-request function for multi-page HTML sites and sub-project directories:
    //    - "/" -> "/index.html"
    //    - "/jdoe/final/about.html", "/jdoe/week1/assets/main.css" (has file extension) -> served as-is
    //    - "/jdoe/final" (directory without trailing slash) -> 301 redirect to "/jdoe/final/"
    //      so relative links like "./about.html" resolve inside the project directory
    //    - "/jdoe/final/" -> "/jdoe/final/index.html"
    const directoryRouterFunction = new cloudfront.Function(
      this,
      'StudentDirectoryRouterFunction',
      {
        functionName: 'cocc-cis295-student-router',
        comment:
          'Redirects extensionless directory paths to trailing slash and resolves /<slug>/<project>/ to index.html',
        runtime: cloudfront.FunctionRuntime.JS_2_0,
        code: cloudfront.FunctionCode.fromInline(
          `
function handler(event) {
  var request = event.request;
  var uri = request.uri || '/';

  if (uri === '/' || uri === '') {
    request.uri = '/index.html';
    return request;
  }

  // Serve directory index for paths ending with "/"
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
    return request;
  }

  var parts = uri.split('/').filter(Boolean);
  var lastSegment = parts[parts.length - 1];

  // Serve files with an extension (e.g. .html, .css, .js, .png, .webp, .xml, .txt) as-is
  if (lastSegment.indexOf('.') !== -1) {
    return request;
  }

  // Redirect directory URLs without a trailing slash so relative links (./about.html) resolve correctly
  return {
    statusCode: 301,
    statusDescription: 'Moved Permanently',
    headers: {
      location: { value: uri + '/' },
    },
  };
}
        `.trim(),
        ),
      },
    )

    // 3. Keep the class directory and every student site out of search engines.
    //    A response header covers all files (HTML, CSS, images) without relying on a root
    //    robots.txt disallow (which prevents crawlers from seeing noindex headers).
    //    Students can still author their own per-project robots.txt / sitemap.xml inside
    //    /<slug>/<project>/ for Week 8 SEO exercises.
    const noIndexHeadersPolicy = new cloudfront.ResponseHeadersPolicy(
      this,
      'StudentNoIndexHeadersPolicy',
      {
        responseHeadersPolicyName: 'cocc-cis295-noindex',
        comment: 'Adds X-Robots-Tag: noindex, nofollow to every response',
        customHeadersBehavior: {
          customHeaders: [
            {
              header: 'X-Robots-Tag',
              value: 'noindex, nofollow',
              override: true,
            },
          ],
        },
      },
    )

    // 4. CloudFront distribution using Origin Access Control (OAC) to read from S3
    this.distribution = new cloudfront.Distribution(
      this,
      'StudentProjectsDistribution',
      {
        comment: 'CIS 295 Student Projects (Web Development II)',
        defaultRootObject: 'index.html',
        priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
        httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessControl(this.bucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          compress: true,
          cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
          responseHeadersPolicy: noIndexHeadersPolicy,
          functionAssociations: [
            {
              function: directoryRouterFunction,
              eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
            },
          ],
        },
      },
    )

    // Outputs used by issue-student-token.sh, deploy-root-index.sh, and GitHub Actions
    new cdk.CfnOutput(this, 'BucketName', {
      value: this.bucket.bucketName,
      description: 'S3 bucket storing student project builds',
    })

    new cdk.CfnOutput(this, 'DistributionId', {
      value: this.distribution.distributionId,
      description: 'CloudFront distribution ID',
    })

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: this.distribution.distributionDomainName,
      description: 'Base domain for student projects',
    })

    new cdk.CfnOutput(this, 'BaseUrl', {
      value: `https://${this.distribution.distributionDomainName}`,
      description:
        'Base HTTPS URL (append /<student-slug>/<project>/ to open a student site)',
    })
  }
}
