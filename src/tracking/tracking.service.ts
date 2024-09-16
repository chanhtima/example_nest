import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tracking } from './entities/tracking.entity';
import { MinioService } from 'src/minio.service';
import { CreateTrackingDto } from './dto/create-tracking.dto';


@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Tracking)
    private readonly trackingRepository: Repository<Tracking>,
    private readonly minioService: MinioService,
  ) {}

  async create(createTrackingDto: CreateTrackingDto, file: Express.Multer.File): Promise<Tracking> {
    let imageUrl: string | null = null;

    if (file) {
      try {
        const bucketName = 'pms';
        imageUrl = file.originalname; 
        await this.minioService.uploadFile(bucketName, file);
      } catch (error) {
        throw new Error(`Error uploading file to MinIO: ${error.message}`);
      }
    }

    const tracking = this.trackingRepository.create({
      ...createTrackingDto,
      image_url: imageUrl,
      cwhen: new Date(),
      cuser: 1, // Replace with actual user ID
    });

    return this.trackingRepository.save(tracking);
  }
}
