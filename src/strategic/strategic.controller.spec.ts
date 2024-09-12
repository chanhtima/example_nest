import { Test, TestingModule } from '@nestjs/testing';
import { StrategicController } from './strategic.controller';
import { StrategicService } from './strategic.service';

describe('StrategicController', () => {
  let controller: StrategicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StrategicController],
      providers: [StrategicService],
    }).compile();

    controller = module.get<StrategicController>(StrategicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
