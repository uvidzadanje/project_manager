import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ResponsibilityService } from './responsibility.service';
import { CreateResponsibilityDto } from './dto/create-responsibility.dto';
import { UpdateResponsibilityDto } from './dto/update-responsibility.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { SPECIAL_PERMISSION_TYPES } from 'src/auth/types.config';

@Controller('responsibility')
export class ResponsibilityController {
  constructor(private readonly responsibilityService: ResponsibilityService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Post()
  create(@Body() createResponsibilityDto: CreateResponsibilityDto) {
    return this.responsibilityService.create(createResponsibilityDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Get()
  findAll() {
    return this.responsibilityService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsibilityService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponsibilityDto: UpdateResponsibilityDto) {
    return this.responsibilityService.update(+id, updateResponsibilityDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(SPECIAL_PERMISSION_TYPES.PROJECT_MANAGER_TYPE)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsibilityService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get("employee/:id")
  getByEmployee(@Param("id") employee_id: number)
  {
    return this.responsibilityService.getByEmployee(employee_id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('project/:projectId/team/:teamId')
  getByProjectAndTeam(@Param("projectId") project_id: number, @Param("teamId") team_id: number)
  {
    return this.responsibilityService.getByTeamAndProject(team_id, project_id);
  }
}
