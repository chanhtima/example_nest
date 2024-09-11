import { Test, TestingModule } from '@nestjs/testing';
import { FliesController } from './flies.controller';
import { FliesService } from './flies.service';

describe('FliesController', () => {
  let controller: FliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FliesController],
      providers: [FliesService],
    }).compile();

    controller = module.get<FliesController>(FliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
