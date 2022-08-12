import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import { Employee } from "src/app/models/employee";
import * as Actions from "src/app/state/auth/auth.action";

export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string;
  employee: Employee | null;
  authError: string;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  accessToken: "",
  employee: null,
  authError: "",
}

export const authReducer = createReducer(
  initialState,
  on(Actions.loginSuccess, (state, { access_token, employee }) =>
    {
      return { ...state, isLoggedIn: true, accessToken: access_token, employee }
    }
  ),
  on(Actions.logout, (state, {}) =>
    {
      return { ...state, isLoggedIn: false, accessToken: ""}
    }
  ),
  on(Actions.authError, (state, { error }) =>
    {
      return { ...state, authError: error}
    }
  ),
  on(Actions.getAuthInfoSuccess, (state, {accessToken, employee}) => {
    return {
      ...state,
      accessToken,
      employee,
      isLoggedIn: true
    }
  }),
  on(Actions.updateEmployeeInfoSuccess, (state, {data}) => {
    return {
      ...state,
      ...data
    }
  })
)
