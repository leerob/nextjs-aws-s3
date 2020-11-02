# Next.js + AWS S3 Upload

This is an example of a Next.js application allowing you to upload photos to an S3 bucket.

## Getting Started

1. Create a new [IAM role](https://aws.amazon.com/iam/) with permission for `AWSCloudFormationFullAccess` and `AmazonS3FullAccess`.
1. Save the access key and secret key.
1. Install the [AWS CLI](https://aws.amazon.com/cli/) and run `aws configure`.
1. This will prompt you to enter the access key and secret key.
1. Create an `.env.local` file similar to `.env.example`.
1. Run `cdk deploy` to create an S3 bucket with the correct CORS settings.
1. Run `yarn dev` to start the Next app at `localhost:3000`.
1. Choose a `.png` or `.jpg` file.
1. You should see your file successfully uploaded to S3.

## Commands

- `yarn dev` – Starts the Next.js app at `localhost:3000`.
- `cdk deploy` – Deploy this stack to your default AWS account/region
- `cdk diff` – Compare deployed stack with current state
- `cdk synth` – Emits the synthesized CloudFormation template
