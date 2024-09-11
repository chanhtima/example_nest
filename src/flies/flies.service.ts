import { Injectable } from '@nestjs/common';
import { CreateFlyDto } from './dto/create-fly.dto';
import { UpdateFlyDto } from './dto/update-fly.dto';

@Injectable()
export class FliesService {
  create(createFlyDto: CreateFlyDto) {
    return 'This action adds a new fly';
  }


}
