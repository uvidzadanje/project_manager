import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamEmployeeRelationDto } from './dto/team-employee-relation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('project manager')
  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('project manager')
  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('project manager')
  @Patch('employee')
  addEmployeeToTeam(@Body() relation: TeamEmployeeRelationDto)
  {
    return this.teamService.addEmployeeToTeam(relation);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('project manager')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('project manager')
  @Delete(":id/employee/:employee_id")
  removeEmployeeFromTeam(@Param('id') id: string, @Param('employee_id') employee_id: string)
  {
    const relation: TeamEmployeeRelationDto = {
      team_id: +id,
      employee_id: +employee_id
    }

    return this.teamService.removeEmployeFromTeam(relation);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('project manager')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
