import { EmployeeType } from "./employee-type";
import { Team } from "./team";

export interface Employee
{
  id: number;
  username: string;
  password?: string;
  firstname: string;
  lastname: string;
  teams?: Team[];
  type?: EmployeeType
}
