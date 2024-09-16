import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as multer from 'multer';
import { MinioService } from '../minio.service';

@Injectable()
export class UploadMiddleware implements NestMiddleware {
  private readonly logger = new Logger(UploadMiddleware.name);
  private readonly multer = multer({ storage: multer.memoryStorage() });

  constructor(private readonly minioService: MinioService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.multer.single('file')(req, res, async (err: any) => {
      if (err) {
        this.logger.error('Error processing file upload', err.message);
        return res.status(500).json({ message: 'Error uploading file.' });
      }

      if (req.file) {
        this.logger.log('File received:', req.file.originalname);
        try {
          await this.minioService.uploadFile('your-bucket-name', req.file);
          next();
        } catch (uploadError) {
          this.logger.error('Error uploading file to MinIO', uploadError.message);
          return res.status(500).json({ message: 'Error uploading file to MinIO.' });
        }
      } else {
        this.logger.warn('No file found in request');
        next();
      }
    });
  }
}
