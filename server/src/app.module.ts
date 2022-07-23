import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'typeorm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeTypeModule } from './employee_type/employee_type.module';
import { TeamModule } from './team/team.module';
import { ProjectModule } from './project/project.module';
import { ResponsibilityModule } from './responsibility/responsibility.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), EmployeeModule, EmployeeTypeModule, TeamModule, ProjectModule, ResponsibilityModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
