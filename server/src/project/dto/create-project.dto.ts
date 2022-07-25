import { Transform } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, MinDate, MinLength } from "class-validator";

export class CreateProjectDto {
    @IsNotEmpty()
    @MinLength(5)
    name: string;

    @IsNotEmpty()
    @Transform(({value}) => new Date(value))
    @IsDate()
    @MinDate(new Date())
    deadline_timestamp: Date;
}
