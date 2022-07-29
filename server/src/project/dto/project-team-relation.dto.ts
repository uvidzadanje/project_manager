import { IsNotEmpty, IsNumber } from "class-validator";

export class ProjectTeamRelationDto {
    @IsNotEmpty()
    @IsNumber()
    project_id: number;

    @IsNotEmpty()
    @IsNumber()
    team_id: number;
}