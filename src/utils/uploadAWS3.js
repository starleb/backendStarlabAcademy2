import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
dotenv.config();

const s3Client = new S3Client({
  forcePathStyle: true,
  endpoint: process.env.ENDPOINT_AWS3,
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESSKEY_ID,
    secretAccessKey: process.env.SECRET_KEY,
  },
});
export default s3Client;
