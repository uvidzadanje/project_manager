import { Employee } from "src/employee/entities/employee.entity";
import { Project } from "src/project/entities/project.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Employee, employee => employee.teams)
    @JoinTable()
    employees: Employee[];

    @ManyToMany(() => Project)
    projects: Project[];
}
