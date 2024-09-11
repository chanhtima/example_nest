import { Module } from '@nestjs/common';
import { FliesService } from './flies.service';
import { FliesController } from './flies.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fly } from './entities/fly.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([Fly]),
    MulterModule.register({
      dest:'./uploads',
    })
  ],
  controllers: [FliesController],
  providers: [FliesService],
})
export class FliesModule {}
