import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateResponsibilityDto {
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    employee_id: number;

    @IsNotEmpty()
    @IsNumber()
    team_id: number;

    @IsNotEmpty()
    @IsNumber()
    project_id: number;
}
