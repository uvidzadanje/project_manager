import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, merge, mergeMap } from "rxjs";
import { Employee } from "src/app/models/employee";
import { Team } from "src/app/models/team";
import { TeamService } from "src/app/services/team.service";
import * as TeamActions from "./team.action";

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
          map((data) => TeamActions.loadTeamsSusscess({teams: data as Team[]}))
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
            const {id, ...changes} = response as Team;
            return TeamActions.updateTeamSuccess({id, changes}) /* TeamActions.setItem({ team: response as Team }) */
          })
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
          map(data => TeamActions.addTeamSuccess({team: data as Team}))
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
          map(() => TeamActions.updateTeamSuccess({id: data.id, changes: data.team}))
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
          map(() => TeamActions.deleteTeamSuccess({id: data.id}))
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
          map(response => TeamActions.addEmployeeToTeamSuccess({employee: (response as Team).employees?.find(employee => employee.id === data.employeeId)!, id: data.teamId}))
        )
      )
    )
  )

  removeEmployee = createEffect(() =>
    this.actions$.pipe(
      ofType(TeamActions.removeEmployeeFromTeam),
      mergeMap(data =>
        this.teamService.addEmployee({teamId: data.teamId, employeeId: data.employeeId, token: data.token})
        .pipe(
          map(() => TeamActions.removeEmployeeFromTeamSuccess({teamId: data.teamId, employeeId: data.employeeId}))
        )
      )
    )
  )
}
