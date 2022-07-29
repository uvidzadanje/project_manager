import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TeamEmployeeRelationDto } from './dto/team-employee-relation.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch('employee')
  addEmployeeToTeam(@Body() relation: TeamEmployeeRelationDto)
  {
    return this.teamService.addEmployeeToTeam(relation);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(+id, updateTeamDto);
  }

  @Delete(":id/employee/:employee_id")
  removeEmployeeFromTeam(@Param('id') id: string, @Param('employee_id') employee_id: string)
  {
    const relation: TeamEmployeeRelationDto = {
      team_id: +id,
      employee_id: +employee_id
    }

    return this.teamService.removeEmployeFromTeam(relation);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teamService.remove(+id);
  }
}
