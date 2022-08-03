import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Employee } from "src/app/models/employee";
import { AuthService } from "src/app/services/auth.service";
import * as AuthActions from "src/app/state/auth/auth.action"

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
  login = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((data) =>
        this.authService.login(data.payload)
        .pipe(
          map((data) => AuthActions.loginSuccess(data as {access_token: string, employee: Employee})),
          catchError((response) => of(AuthActions.authError({ error: response.error.message})))
        )
      )
    )
  )
}
