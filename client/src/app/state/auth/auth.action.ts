import { createAction, props } from "@ngrx/store";
import { LoginPayloadDto } from "src/app/dto/auth/login-payload.dto";
import { UpdateEmployeeDto } from "src/app/dto/employee/employee.dto";
import { Employee } from "src/app/models/employee";

export const login = createAction(
  "[Login Page] Login",
  props<{ payload: LoginPayloadDto }>()
);

export const loginSuccess = createAction(
  "Login success",
  props<{ access_token: string, employee: Employee }>()
);

export const logout = createAction(
  "Login logout"
)

export const authError = createAction(
  "Login error",
  props<{ error: string }>()
)

export const getAuthInfo = createAction(
  "Login info",
  props<{ accessToken: string}>()
)

export const getAuthInfoSuccess = createAction(
  "Login info success",
  props<{ accessToken: string, employee: Employee }>()
)

export const updateEmployeeInfo = createAction(
  "Update employee info",
  props<{ accessToken: string, id: number, changes: UpdateEmployeeDto }>()
)

export const updateEmployeeInfoSuccess = createAction(
  "Update employee info success",
  props<{ data: UpdateEmployeeDto }>()
)

