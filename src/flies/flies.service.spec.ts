import { Test, TestingModule } from '@nestjs/testing';
import { FliesService } from './flies.service';

describe('FliesService', () => {
  let service: FliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FliesService],
    }).compile();

    service = module.get<FliesService>(FliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
