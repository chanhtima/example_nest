import { Test, TestingModule } from '@nestjs/testing';
import { StrategicService } from './strategic.service';

describe('StrategicService', () => {
  let service: StrategicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StrategicService],
    }).compile();

    service = module.get<StrategicService>(StrategicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
