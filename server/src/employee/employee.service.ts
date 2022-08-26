import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import * as bcrypt from "bcrypt";
import { EmployeeTypeService } from 'src/employee_type/employee_type.service';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepository: Repository<Employee>,
    private employeeTypeService: EmployeeTypeService,
    ) { }

  async create(createEmployeeDto: CreateEmployeeDto) {

    const saltRounds = 10;
    createEmployeeDto.password = await bcrypt.hash(createEmployeeDto.password, saltRounds);
    let employee = this.employeeRepository.create(createEmployeeDto);

    const employee_type = await this.employeeTypeService.findOne(createEmployeeDto.employee_type_id);
    employee.type = employee_type;

    return await this.employeeRepository.save(employee);
  }

  async findAll() {
    return await this.employeeRepository.find({
      relations: ["type"],
      select: {
        id: true,
        firstname: true,
        lastname: true
      }
    });
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne({
      where: {
        id
      },
      relations: ["type"]
    });
  }

  async findByUsername(username: string)
  {
    return await this.employeeRepository.findOne({
      where: {
        username
      }
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    if(updateEmployeeDto.password) {
      const saltRounds = 10;
      updateEmployeeDto.password = await bcrypt.hash(updateEmployeeDto.password, saltRounds);
    }

    const employee_type_id = updateEmployeeDto.employee_type_id;
    
    delete updateEmployeeDto["employee_type_id"];

    if(employee_type_id)
    {
      const type = await this.employeeTypeService.findOne(employee_type_id);
      return await this.employeeRepository.update(id, {...updateEmployeeDto, type});
    }

    return await this.employeeRepository.update(id, updateEmployeeDto);
  }

  async remove(id: number) {
    return await this.employeeRepository.delete(id);
  }

  async getByTeam(id: number)
  {
    return await this.employeeRepository.find({
      where: {
        teams: {
          id
        }
      },
      relations: ["type"]
    })
  }
}
