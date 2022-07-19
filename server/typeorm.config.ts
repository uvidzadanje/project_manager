import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Employee } from "src/employee/entities/employee.entity";
import { EmployeeType } from "src/employee_type/entities/employee_type.entity";
import { Project } from "src/project/entities/project.entity";
import { Responsibility } from "src/responsibility/entities/responsibility.entity";
import { Team } from "src/team/entities/team.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "project_manager",
  entities: [Employee, EmployeeType, Team, Project, Responsibility],
  synchronize: false,
  migrations: ['src/migration/*{.ts,.js}'],
};