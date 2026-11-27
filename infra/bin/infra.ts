#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { StudentHostingStack } from '../lib/student-hosting-stack.js'

const app = new cdk.App()

new StudentHostingStack(app, 'Cis295StudentHostingStack', {
  description:
    'CIS 295 Student Project Hosting: S3 bucket, CloudFront distribution, and multi-page directory router',
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || '081028362911',
    region: process.env.CDK_DEFAULT_REGION || 'us-west-2',
  },
})
