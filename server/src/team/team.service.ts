import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeService } from 'src/employee/employee.service';
import { Repository } from 'typeorm';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamEmployeeRelationDto } from './dto/team-employee-relation.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) private teamRepository: Repository<Team>,
    private employeeService: EmployeeService
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const team = this.teamRepository.create(createTeamDto);
    return await this.teamRepository.save(team);
  }

  async findAll() {
    return await this.teamRepository.find({
      relations: ["employees", "employees.type"],
      select: {
        employees: {
          id: true,
          firstname: true,
          lastname: true,
          username: true,
          type: {
            id: true,
            name: true
          }
        },
      }
    });
  }

  async findOne(id: number) {
    return this.teamRepository.findOne({
      where: {
        id
      }, 
      relations: {
        employees: true
      }, 
      select: { 
        employees: {
          id: true,
          firstname: true,
          lastname: true,
          username: true
        } 
      }
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return await this.teamRepository.update(id, updateTeamDto);
  }

  async remove(id: number) {
    return await this.teamRepository.delete(id);
  }

  async addEmployeeToTeam(relation: TeamEmployeeRelationDto)
  {
    let team = await this.findOne(relation.team_id);
    team.employees.push(await this.employeeService.findOne(relation.employee_id));
    return await this.teamRepository.save(team);
  }

  async removeEmployeFromTeam(relation: TeamEmployeeRelationDto)
  {
    let team = await this.findOne(relation.team_id);
    team.employees = team.employees.filter(employee => employee.id !== relation.employee_id);
    return await this.teamRepository.save(team);
  }
}
