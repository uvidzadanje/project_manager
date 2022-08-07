import { AuthState } from "./state/auth/auth.reducer";
import { EmployeeState } from "./state/employee/employee.reducer";
import { ProjectState } from "./state/project/project.reducer";
import { TeamState } from "./state/team/team.reducer";

export interface AppState {
  auth: AuthState;
  teams: TeamState;
  projects: ProjectState;
}
