import { Employee } from "src/employee/entities/employee.entity";
import { Project } from "src/project/entities/project.entity";
import { Team } from "src/team/entities/team.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Responsibility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Team)
    team: Team;

    @ManyToOne(() => Project)
    project: Project;

    @ManyToOne(() => Employee)
    employee: Employee;
}
