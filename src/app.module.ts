import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FliesModule } from './flies/flies.module';
import { ProductModule } from './product/product.module';
import { StrategicModule } from './strategic/strategic.module';

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
      synchronize: true, // Enable automatic schema sync in development
    }),
    ProductModule,
    FliesModule,
    StrategicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
