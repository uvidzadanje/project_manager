import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Responsibility } from "src/app/models/responsibility";
import { ResponsibilityService } from "src/app/services/responsibility.service";
import * as ResponsibilityActions from "./responsibility.action";
import * as ErrorActions from "../error/error.action";

@Injectable()
export class ResponsibilityEffects {
  constructor(
    private actions$: Actions,
    private responsibilityService: ResponsibilityService,
  ) {}

  getByEmployeeID = createEffect(() =>
    this.actions$.pipe(
      ofType(ResponsibilityActions.getResponsibilityByEmployee),
      mergeMap(data =>
        this.responsibilityService.getByEmployee(data.id, data.token)
        .pipe(
          map(data => ResponsibilityActions.loadResponsibilitySuccess({responsibilities: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  getByProjectAndTeam = createEffect(() =>
    this.actions$.pipe(
      ofType(ResponsibilityActions.getResponsibilityByProjectAndTeam),
      mergeMap(data =>
        this.responsibilityService.getByProjectAndTeam(data)
        .pipe(
          map(data => ResponsibilityActions.loadResponsibilitySuccess({responsibilities: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  add = createEffect(() =>
    this.actions$.pipe(
      ofType(ResponsibilityActions.addResponsibility),
      mergeMap(data =>
        this.responsibilityService.add(data)
        .pipe(
          map(data => ResponsibilityActions.addResponsibilitySuccess({responsibility: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  update = createEffect(() =>
    this.actions$.pipe(
      ofType(ResponsibilityActions.updateResponsibility),
      mergeMap(data =>
        this.responsibilityService.update(data)
        .pipe(
          map(() => ResponsibilityActions.updateResponsibilitySuccess({...data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  delete = createEffect(() =>
    this.actions$.pipe(
      ofType(ResponsibilityActions.deleteResponsibility),
      mergeMap(data =>
        this.responsibilityService.delete(data)
        .pipe(
          map(() => ResponsibilityActions.deleteResponsibilitySuccess({...data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )
}
