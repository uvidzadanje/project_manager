import { Team } from "src/team/entities/team.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: "timestamp"})
    deadline_timestamp: Date;

    @ManyToMany(() => Team)
    @JoinTable()
    teams: Team[];
}
