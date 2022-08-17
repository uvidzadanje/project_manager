import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { Responsibility } from "src/app/models/responsibility";
import { ResponsibilityService } from "src/app/services/responsibility.service";
import * as ResponsibilityActions from "./responsibility.action";

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
          map(data => ResponsibilityActions.loadResponsibilitySuccess({responsibilities: data as Responsibility[]}))
        )
      )
    )
  )
}
