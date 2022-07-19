import { Module } from '@nestjs/common';
import { EmployeeTypeService } from './employee_type.service';
import { EmployeeTypeController } from './employee_type.controller';

@Module({
  controllers: [EmployeeTypeController],
  providers: [EmployeeTypeService]
})
export class EmployeeTypeModule {}
