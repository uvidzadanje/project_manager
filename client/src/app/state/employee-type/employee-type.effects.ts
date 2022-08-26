import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { EmployeeType } from "src/app/models/employee-type";
import { EmployeeTypeService } from "src/app/services/employee-type.service";
import * as EmployeeTypeActions from "./employee-type.action"

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
          map(data => EmployeeTypeActions.loadEmployeeTypesSuccess({employeeTypes: data as EmployeeType[]}))
        )
      )
    )
  )
}
