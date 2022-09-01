import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, of } from "rxjs";
import { Employee } from "src/app/models/employee";
import { Team } from "src/app/models/team";
import { TeamService } from "src/app/services/team.service";
import * as TeamActions from "./team.action";
import * as ErrorActions from "../error/error.action";

@Injectable()
export class TeamEffects {
  constructor(
    private actions$: Actions,
    private teamService: TeamService
  ) {}

  getAll = createEffect(()=>
    this.actions$.pipe(
      ofType(TeamActions.loadTeams),
      mergeMap((data) =>
        this.teamService.getAll(data.token)
        .pipe(
          map((data) => TeamActions.loadTeamsSusscess({teams: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  getOne = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.loadMoreInfoForTeam),
      mergeMap((data) =>
        this.teamService.getOne(data.id, data.token)
        .pipe(
          map((response) => {
            const {id, ...changes} = response;
            return TeamActions.updateTeamSuccess({id, changes})
          }),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  add = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.addTeam),
      mergeMap((data) =>
        this.teamService.add({token: data.token, team: data.team})
        .pipe(
          map(data => TeamActions.addTeamSuccess({team: {...data, employees: []}})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  update = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.updateTeam),
      mergeMap((data) =>
        this.teamService.update(data)
        .pipe(
          map(() => TeamActions.updateTeamSuccess({id: data.id, changes: data.team})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  delete = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.deleteTeam),
      mergeMap((data) =>
        this.teamService.delete(data as {token: string, id: number})
        .pipe(
          map(() => TeamActions.deleteTeamSuccess({id: data.id})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  addEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.addEmployeeToTeam),
      mergeMap(data =>
        this.teamService.addEmployee({teamId: data.teamId, employeeId: data.employeeId, token: data.token})
        .pipe(
          map(response => TeamActions.addEmployeeToTeamSuccess({employee: (response as Team).employees?.find(employee => employee.id === data.employeeId)!, id: data.teamId})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        ),
      )
    )
  )

  removeEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.removeEmployeeFromTeam),
      mergeMap(data =>
        this.teamService.removeEmployee({teamId: data.teamId, employeeId: data.employeeId, token: data.token})
        .pipe(
          map(() => TeamActions.removeEmployeeFromTeamSuccess({teamId: data.teamId, employeeId: data.employeeId})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )
}
