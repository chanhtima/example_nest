import { PartialType } from '@nestjs/mapped-types';
import { CreateStrategicDto } from './create-strategic.dto';

export class UpdateStrategicDto extends PartialType(CreateStrategicDto) {
    additionalField?: string;
  }
  