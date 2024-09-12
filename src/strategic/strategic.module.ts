import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StrategicService } from './strategic.service';
import { StrategicController } from './strategic.controller';
import { Strategic } from './entities/strategic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Strategic])],
  providers: [StrategicService],
  controllers: [StrategicController],
  exports: [StrategicService],  // Export if you need to use this module in other modules
})
export class StrategicModule {}
