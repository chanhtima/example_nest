import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FliesService } from './flies.service';
import { CreateFlyDto } from './dto/create-fly.dto';
import { UpdateFlyDto } from './dto/update-fly.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('flies')
export class FliesController {
  constructor(private readonly fliesService: FliesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    if (!file) {
      throw new Error('No file uploaded');
    }
    console.log("file uploaded:",file);
    return file    
  }
}
