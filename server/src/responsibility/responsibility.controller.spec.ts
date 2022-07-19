import { Test, TestingModule } from '@nestjs/testing';
import { ResponsibilityController } from './responsibility.controller';
import { ResponsibilityService } from './responsibility.service';

describe('ResponsibilityController', () => {
  let controller: ResponsibilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponsibilityController],
      providers: [ResponsibilityService],
    }).compile();

    controller = module.get<ResponsibilityController>(ResponsibilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
