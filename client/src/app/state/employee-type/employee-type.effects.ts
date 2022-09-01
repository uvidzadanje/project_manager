import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { EmployeeType } from "src/app/models/employee-type";
import { EmployeeTypeService } from "src/app/services/employee-type.service";
import * as EmployeeTypeActions from "./employee-type.action"
import * as ErrorActions from "../error/error.action";

@Injectable()
export class EmployeeTypeEffects {
  constructor(
    private actions$: Actions,
    private employeeTypeService: EmployeeTypeService
  ) {}

  getAll = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeTypeActions.loadEmployeeTypes),
      mergeMap(() =>
        this.employeeTypeService.getAll()
        .pipe(
          map(data => EmployeeTypeActions.loadEmployeeTypesSuccess({employeeTypes: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )
}
