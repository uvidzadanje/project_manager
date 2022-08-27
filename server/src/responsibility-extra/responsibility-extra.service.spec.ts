import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibilityExtraService } from './responsibility-extra.service';

describe('ResponsibilityExtraService', () => {
  let service: ResponsibilityExtraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponsibilityExtraService],
    }).compile();

    service = module.get<ResponsibilityExtraService>(ResponsibilityExtraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
