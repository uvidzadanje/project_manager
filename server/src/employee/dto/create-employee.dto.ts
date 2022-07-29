import { IsNotEmpty, IsNumber, Matches, MaxLength, MinLength } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/, {
        message: "Username is not in right format"
    })
    username: string;

    @IsNotEmpty()
    @MaxLength(25)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    })
    password: string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(30)
    firstname: string;

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(30)
    lastname: string;

    @IsNotEmpty()
    @IsNumber()
    employee_type_id: number;
}
