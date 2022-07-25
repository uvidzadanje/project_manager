import { IsNotEmpty } from "class-validator";

export class CreateEmployeeTypeDto {
    @IsNotEmpty()
    name: string;
}
