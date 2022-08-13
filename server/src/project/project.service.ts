import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamService } from 'src/team/team.service';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectTeamRelationDto } from './dto/project-team-relation.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    private teamService: TeamService
  ) {}

  async create(createProjectDto: CreateProjectDto) {
    const project = this.projectRepository.create(createProjectDto);
    return await this.projectRepository.save(project);
  }

  async findAll() {
    return await this.projectRepository.find({
      relations: ["teams"]
    });
  }

  async findOne(id: number) {
    return await this.projectRepository.findOne({
      where: {
        id
      },
      relations: ["teams"]
    });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.projectRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.projectRepository.delete(id);
  }

  async addTeamToProject(relation: ProjectTeamRelationDto)
  {
    const project = await this.findOne(relation.project_id);
    project.teams.push(await this.teamService.findOne(relation.team_id));

    return await this.projectRepository.save(project);
  }

  async removeTeamFromProject(relation: ProjectTeamRelationDto)
  {
    const project = await this.findOne(relation.project_id);
    project.teams = project.teams.filter(team => team.id !== relation.team_id);

    return await this.projectRepository.save(project);
  }
}
