import { IsNotEmpty } from "class-validator";

export class TeamEmployeeRelationDto {
    @IsNotEmpty()
    team_id: number;

    @IsNotEmpty()
    employee_id: number;
}