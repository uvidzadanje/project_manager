import { Module } from '@nestjs/common';
import { ResponsibilityService } from './responsibility.service';
import { ResponsibilityController } from './responsibility.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Responsibility } from './entities/responsibility.entity';
import { TeamModule } from 'src/team/team.module';
import { ProjectModule } from 'src/project/project.module';
import { EmployeeModule } from 'src/employee/employee.module';

@Module({
  imports: [TypeOrmModule.forFeature([Responsibility]), TeamModule, ProjectModule, EmployeeModule],
  controllers: [ResponsibilityController],
  providers: [ResponsibilityService]
})
export class ResponsibilityModule {}
