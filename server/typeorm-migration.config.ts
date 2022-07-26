import { Employee } from "src/employee/entities/employee.entity";
import { EmployeeType } from "src/employee_type/entities/employee_type.entity";
import { Project } from "src/project/entities/project.entity";
import { Responsibility } from "src/responsibility/entities/responsibility.entity";
import { Team } from "src/team/entities/team.entity";
import { DataSource } from "typeorm";

const config = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "project_manager",
    entities: [Employee, EmployeeType, Team, Project, Responsibility],
    synchronize: false,
    migrations: ['migration/*{.ts,.js}'],
})
config.initialize();
export default config;