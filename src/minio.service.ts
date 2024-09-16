import { Injectable, Logger } from '@nestjs/common';
import * as Minio from 'minio';

@Injectable()
export class MinioService {
  private readonly logger = new Logger(MinioService.name);
  private readonly minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT,
      port: parseInt(process.env.MINIO_PORT, 10),
      useSSL: false, // Set to true if using HTTPS
      accessKey: process.env.MINIO_ACCESS_KEY,
      secretKey: process.env.MINIO_SECRET_KEY,
    });
  }

  async uploadFile(bucketName: string, file: Express.Multer.File): Promise<void> {
    try {
      // Ensure bucket exists
      const bucketExists = await this.minioClient.bucketExists(bucketName);
      if (!bucketExists) {
        await this.minioClient.makeBucket(bucketName, 'pms'); // Adjust region as necessary
      }

      await this.minioClient.putObject(bucketName, file.originalname, file.buffer);
      this.logger.log(`File ${file.originalname} uploaded successfully.`);
    } catch (error) {
      this.logger.error(`Error uploading file: ${error.message}`);
      throw error;
    }
  }
}
