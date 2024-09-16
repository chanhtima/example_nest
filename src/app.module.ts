import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrategicModule } from './strategic/strategic.module';
import { MinioService } from './minio.service';
import { UploadMiddleware } from './middleware/upload.middleware';
import { TrackingModule } from './tracking/tracking.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [join(process.cwd(), 'dist/**/*.entity.js')],
      synchronize: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    StrategicModule,
    TrackingModule,
  ],
  controllers: [AppController],
  providers: [AppService, MinioService],
  exports: [MinioService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UploadMiddleware)
      .forRoutes('*'); // กำหนดเส้นทางที่ middleware จะใช้งาน
  }
}
