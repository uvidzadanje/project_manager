import { AuthState } from "./state/auth/auth.reducer";
import { EmployeeState } from "./state/employee/employee.reducer";

export interface AppState {
  auth: AuthState;
}
