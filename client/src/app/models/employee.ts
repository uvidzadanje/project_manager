import { EmployeeType } from "./employee-type";

export interface Employee
{
  id: number;
  username: string;
  password?: string;
  firstname: string;
  lastname: string;
  employeeType?: EmployeeType
}
