import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeTypeDto } from './create-employee_type.dto';

export class UpdateEmployeeTypeDto extends PartialType(CreateEmployeeTypeDto) {}
