import { CreateEmployeeDto } from "../employee/employee.dto";

export interface LoginPayloadDto extends Pick<CreateEmployeeDto, "username" | "password"> { }
