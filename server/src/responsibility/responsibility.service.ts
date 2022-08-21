import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeService } from 'src/employee/employee.service';
import { ProjectService } from 'src/project/project.service';
import { TeamService } from 'src/team/team.service';
import { Repository } from 'typeorm';
import { CreateResponsibilityDto } from './dto/create-responsibility.dto';
import { UpdateResponsibilityDto } from './dto/update-responsibility.dto';
import { Responsibility } from './entities/responsibility.entity';

@Injectable()
export class ResponsibilityService {
  constructor(
    @InjectRepository(Responsibility) private responsibilityRepository: Repository<Responsibility>,
    private teamService: TeamService,
    private projectService: ProjectService,
    private employeeService: EmployeeService
  ) {}

  async create(createResponsibilityDto: CreateResponsibilityDto) {
    const responsibility = this.responsibilityRepository.create(createResponsibilityDto);
    responsibility.employee = await this.employeeService.findOne(createResponsibilityDto.employee_id);
    responsibility.project = await this.projectService.findOne(createResponsibilityDto.project_id);
    responsibility.team = await this.teamService.findOne(createResponsibilityDto.team_id);
    return await this.responsibilityRepository.save(responsibility);
  }

  async findAll() {
    return await this.responsibilityRepository.find();
  }

  async findOne(id: number) {
    return await this.responsibilityRepository.findOne({
      where: {
        id
      },
      relations: ["employee", "team", "project"]
    });
  }

  async update(id: number, updateResponsibilityDto: UpdateResponsibilityDto) {
    return await this.responsibilityRepository.update(id, updateResponsibilityDto);
  }

  async remove(id: number) {
    return await this.responsibilityRepository.delete(id);
  }

  async getByEmployee(id: number)
  {
    return await this.responsibilityRepository.find({
      relations: ["team", "project"],
      where: {
        employee: {
          id
        }
      }
    })
  }

  async getByTeamAndProject(teamId: number, projectId: number)
  {
    return await this.responsibilityRepository.find({
      where: {
        team: {
          id: teamId
        },
        project: {
          id: projectId
        }
      },
      relations: ["team", "project", "employee"]
    })
  }
}
