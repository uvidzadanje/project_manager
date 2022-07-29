import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectTeamRelationDto } from './dto/project-team-relation.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Patch('team')
  addTeamToProject(@Body() relation: ProjectTeamRelationDto)
  {
    return this.projectService.addTeamToProject(relation);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id/team/:team_id')
  removeTeamFromProject(@Param('id') id: number, @Param('team_id') team_id: number)
  {
    const relation: ProjectTeamRelationDto = {
      project_id: +id,
      team_id: +team_id
    }

    return this.projectService.removeTeamFromProject(relation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
