import s3Client from './uploadAWS3.js';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
dotenv.config();
export const uploadFile = async (file) => {
  try {
    const sanitizedFileName = file.originalname
      .replace(/\s+/g, '_')
      .replace(/[^a-zA-Z0-9_.-]/g, '');
    const fileKey = `${Date.now()}_${sanitizedFileName}`;
    const command = new PutObjectCommand({
      Bucket: 'academy2_2025',
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read',
    });

    const data = await s3Client.send(command);
    const url = `https://wanjnymonkrapynwohbc.supabase.co/storage/v1/object/public/academy2_2025/${fileKey}`;
    return { data, url };
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
