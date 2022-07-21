import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeTypeDto } from './dto/create-employee_type.dto';
import { UpdateEmployeeTypeDto } from './dto/update-employee_type.dto';
import { EmployeeType } from './entities/employee_type.entity';

@Injectable()
export class EmployeeTypeService {
  constructor(
    @InjectRepository(EmployeeType) private employeeTypeRepository: Repository<EmployeeType> 
  ) {}

  async create(createEmployeeTypeDto: CreateEmployeeTypeDto) {
    const employee_type = this.employeeTypeRepository.create(createEmployeeTypeDto);
    return await this.employeeTypeRepository.save(employee_type);
  }

  async findAll() {
    return await this.employeeTypeRepository.find();
  }

  async findOne(id: number) {
    return await this.employeeTypeRepository.findOne({where: {id}});
  }

  async update(id: number, updateEmployeeTypeDto: UpdateEmployeeTypeDto) {
    return await this.employeeTypeRepository.update(id, updateEmployeeTypeDto);
  }

  async remove(id: number) {
    return await this.employeeTypeRepository.delete(id);
  }
}
