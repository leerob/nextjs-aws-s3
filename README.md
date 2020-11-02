# Next.js + AWS S3 Upload

This is an example of a Next.js application allowing you to upload photos to an S3 bucket.

## Getting Started

**Option 1: Use an existing S3 bucket.**

Retrieve your existing access key, secret key, S3 bucket region and name. Provide those values after clicking "Deploy" to automatically set the environment variables.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fleerob%2Fnextjs-aws-s3&env=ACCESS_KEY,SECRET_KEY,REGION,BUCKET_NAME&envDescription=AWS%20S3%20bucket%20information%20and%20keys.)

**Option 2: Create an S3 bucket.**

1. Create a new [IAM role](https://aws.amazon.com/iam/) with permission for `AWSCloudFormationFullAccess` and `AmazonS3FullAccess`.
1. Save the access key and secret key.
1. Install the [AWS CLI](https://aws.amazon.com/cli/) and run `aws configure`.
1. This will prompt you to enter the access key and secret key.
1. Create an `.env.local` file similar to `.env.example`.
1. Run `cdk deploy` to create an S3 bucket with the correct CORS settings.
1. Visit your newly created S3 bucket and retrieve the name and region.
1. Add the name and region to `.env.local`.
1. Run `yarn dev` to start the Next app at `localhost:3000`.
1. Choose a `.png` or `.jpg` file.
1. You should see your file successfully uploaded to S3.

This example uses [`createPresignedPost`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#createPresignedPost-property) instead of [`getSignedUrlPromise`](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrlPromise-property) to allow setting max/min file sizes with `content-length-range`.

## Commands

- `yarn dev` – Starts the Next.js app at `localhost:3000`.
- `cdk deploy` – Deploy this stack to your default AWS account/region
- `cdk diff` – Compare deployed stack with current state
- `cdk synth` – Emits the synthesized CloudFormation template
