import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Employee } from "src/app/models/employee";
import { EmployeeService } from "src/app/services/employee.service";
import * as EmployeeActions from "./employee.action";
import * as ErrorActions from "../error/error.action";

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  getAll = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      mergeMap(data =>
        this.employeeService.getAll(data.token)
        .pipe(
          map(data => EmployeeActions.loadEmployeesSuccess({ employees: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  getByTeam = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployeesByTeam),
      mergeMap(data =>
        this.employeeService.getByTeam(data.teamId)
        .pipe(
          map(data => EmployeeActions.loadEmployeesSuccess({employees: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )
}
