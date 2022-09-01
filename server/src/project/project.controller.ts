import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectTeamRelationDto } from './dto/project-team-relation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { SPECIAL_PERMISSION_TYPES } from 'src/auth/types.config';


@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Get()
  findAll() {
    return this.projectService.findAll();
  }
  
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Patch('team')
  addTeamToProject(@Body() relation: ProjectTeamRelationDto)
  {
    return this.projectService.addTeamToProject(relation);
  }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Delete(':id/team/:team_id')
  removeTeamFromProject(@Param('id') id: number, @Param('team_id') team_id: number)
  {
    const relation: ProjectTeamRelationDto = {
      project_id: +id,
      team_id: +team_id
    }

    return this.projectService.removeTeamFromProject(relation);
  }
  
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
