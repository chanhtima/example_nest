import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { TrackingService } from './tracking.service';

@Controller('tracking')
export class TrackingController {
  constructor(private readonly trackingService: TrackingService) {}

  @Post()
@UseInterceptors(FileInterceptor('file'))
async create(
  @Body() createTrackingDto: CreateTrackingDto,
  @UploadedFile() file: Express.Multer.File,
) {
  console.log('Create Tracking DTO:', createTrackingDto);
  console.log('Uploaded File:', file);

  if (!file) {
    console.error('No file uploaded');
  }

  return this.trackingService.create(createTrackingDto, file);
}

}
