import { createAction, props } from "@ngrx/store";
import { LoginPayloadDto } from "src/app/dto/auth/login-payload.dto";
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

