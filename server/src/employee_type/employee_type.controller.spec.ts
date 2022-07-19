import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeTypeController } from './employee_type.controller';
import { EmployeeTypeService } from './employee_type.service';

describe('EmployeeTypeController', () => {
  let controller: EmployeeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeTypeController],
      providers: [EmployeeTypeService],
    }).compile();

    controller = module.get<EmployeeTypeController>(EmployeeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
