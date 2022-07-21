import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>
    ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return await this.employeeRepository.save(employee);
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne({where: {id}});
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeRepository.update(id, updateEmployeeDto);
  }

  async remove(id: number) {
    return await this.employeeRepository.delete(id);
  }
}
