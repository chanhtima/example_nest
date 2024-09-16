import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackingService } from './tracking.service';
import { TrackingController } from './tracking.controller';
import { Tracking } from './entities/tracking.entity'; // Import your Tracking entity
import { MinioService } from '../minio.service'; // Adjust path as necessary

@Module({
  imports: [
    TypeOrmModule.forFeature([Tracking]), // Register Tracking repository here
  ],
  controllers: [TrackingController],
  providers: [TrackingService, MinioService],
})
export class TrackingModule {}
