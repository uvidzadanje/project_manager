import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibilityExtraController } from './responsibility-extra.controller';
import { ResponsibilityExtraService } from './responsibility-extra.service';

describe('ResponsibilityExtraController', () => {
  let controller: ResponsibilityExtraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsibilityExtraController],
      providers: [ResponsibilityExtraService],
    }).compile();

    controller = module.get<ResponsibilityExtraController>(ResponsibilityExtraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
