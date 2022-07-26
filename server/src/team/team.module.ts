import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { EmployeeModule } from 'src/employee/employee.module';
import { ResponsibilityExtraModule } from 'src/responsibility-extra/responsibility-extra.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), EmployeeModule, ResponsibilityExtraModule],
  controllers: [TeamController],
  providers: [TeamService],
  exports: [TeamService]
})
export class TeamModule {}
