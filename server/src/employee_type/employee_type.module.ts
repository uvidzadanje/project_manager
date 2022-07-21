import { Module } from '@nestjs/common';
import { EmployeeTypeService } from './employee_type.service';
import { EmployeeTypeController } from './employee_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeType } from './entities/employee_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeType])],
  controllers: [EmployeeTypeController],
  providers: [EmployeeTypeService]
})
export class EmployeeTypeModule {}
