import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Employee } from "src/app/models/employee";
import { AuthService } from "src/app/services/auth.service";
import { EmployeeService } from "src/app/services/employee.service";
import * as AuthActions from "src/app/state/auth/auth.action"

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private employeeService: EmployeeService
  ) {}

  login = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((data) =>
        this.authService.login(data.payload)
        .pipe(
          map((data) => {
            const result = data as {access_token: string, employee: Employee};
            localStorage.setItem("token", result.access_token);
            return AuthActions.loginSuccess(result)
          }),
          catchError((response) => of(AuthActions.authError({ error: response.error.message})))
        )
      )
    )
  )

  getAuthInfoByToken = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getAuthInfo),
      mergeMap((data) =>
        this.authService.getAuthInfoByToken(data.accessToken)
        .pipe(
          map((value) => AuthActions.getAuthInfoSuccess({accessToken: data.accessToken, employee: value as Employee}))
        )
      )
    )
  )

  updateEmployeeInfo = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.updateEmployeeInfo),
      mergeMap((data) =>
        this.employeeService.update({id: data.id, changes: data.changes, accessToken: data.accessToken})
        .pipe(
          map(() => AuthActions.updateEmployeeInfoSuccess({data: data.changes}))
        )
      )
    )
  )
}
