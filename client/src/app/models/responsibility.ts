import { Employee } from "./employee";
import { Project } from "./project";
import { Team } from "./team";

export interface Responsibility {
  id: number;
  description: string;
  team?: Team;
  project?: Project;
  employee?: Employee;
}
