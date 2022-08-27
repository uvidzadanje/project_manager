import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { TeamModule } from 'src/team/team.module';
import { ResponsibilityExtraModule } from 'src/responsibility-extra/responsibility-extra.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), TeamModule, ResponsibilityExtraModule],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService]
})
export class ProjectModule {}
