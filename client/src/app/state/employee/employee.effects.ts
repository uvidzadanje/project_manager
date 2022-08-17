import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { Employee } from "src/app/models/employee";
import { EmployeeService } from "src/app/services/employee.service";
import * as EmployeeActions from "./employee.action";

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
          map(data => EmployeeActions.loadEmployeesSuccess({ employees: data as Employee[]}))
        )
      )
    )
  )
}
