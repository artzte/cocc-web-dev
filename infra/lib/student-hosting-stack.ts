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

    // 2. CloudFront viewer-request function for student portfolios and multi-page sub-projects:
    //    - "/" -> "/index.html" (class directory)
    //    - "/404.html", "/jdoe/final/about.html", "/jdoe/week1/assets/main.css" -> served as-is
    //    - "/jdoe" or "/jdoe/" -> 302 redirect to "/jdoe/portfolio/"
    //    - "/jdoe/week1" (directory without trailing slash) -> 301 redirect to "/jdoe/week1/"
    //      so relative links (./about.html, ../final/) resolve inside the project directory
    //    - "/jdoe/week1/" -> "/jdoe/week1/index.html"
    const directoryRouterFunction = new cloudfront.Function(
      this,
      'StudentDirectoryRouterFunction',
      {
        functionName: 'cocc-cis295-student-router',
        comment:
          'Redirects /<slug> to /<slug>/portfolio/, enforces trailing slashes on project directories, and resolves index.html',
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

  var parts = uri.split('/').filter(Boolean);
  var lastSegment = parts[parts.length - 1];

  // Serve files with an extension (e.g. /404.html, .html, .css, .js, .png, .webp, .xml, .txt) as-is
  if (lastSegment.indexOf('.') !== -1) {
    return request;
  }

  // Redirect /<student> and /<student>/ to that student's portfolio at /<student>/portfolio/
  if (parts.length === 1) {
    return {
      statusCode: 302,
      statusDescription: 'Found',
      headers: {
        location: { value: '/' + parts[0] + '/portfolio/' },
      },
    };
  }

  // Serve directory index for project paths ending with "/"
  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
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
    //    Private S3 + OAC returns 403 for missing keys (unless s3:ListBucket is granted),
    //    so map both 403 and 404 to /404.html ("Not found — coming soon") with a short TTL.
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
        errorResponses: [
          {
            httpStatus: 403,
            responseHttpStatus: 404,
            responsePagePath: '/404.html',
            ttl: cdk.Duration.seconds(60),
          },
          {
            httpStatus: 404,
            responseHttpStatus: 404,
            responsePagePath: '/404.html',
            ttl: cdk.Duration.seconds(60),
          },
        ],
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
        'Base HTTPS URL (append /<student-slug> for portfolio or /<student-slug>/<project>/ for a project)',
    })
  }
}
