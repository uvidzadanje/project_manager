import { EmployeeType } from "src/employee_type/entities/employee_type.entity";
import { Team } from "src/team/entities/team.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @ManyToOne(() => EmployeeType, (employeeType) => employeeType.employees)
    type: EmployeeType;

    @ManyToMany(() => Team)
    @JoinTable()
    teams: Team[];
}
