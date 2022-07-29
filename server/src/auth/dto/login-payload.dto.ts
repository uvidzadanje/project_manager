import { PickType } from "@nestjs/mapped-types";
import { CreateEmployeeDto } from "src/employee/dto/create-employee.dto";

export class LoginPayloadDto extends PickType(CreateEmployeeDto, ["username", "password"] as const) { }