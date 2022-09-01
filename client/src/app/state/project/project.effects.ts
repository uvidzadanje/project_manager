import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { Project } from "src/app/models/project";
import { ProjectService } from "src/app/services/project.service";
import * as ProjectActions from "./project.action";
import * as ErrorActions from "../error/error.action";

@Injectable()
export class ProjectEffects {

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}

  getAll = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
      mergeMap((data) =>
        this.projectService.getAll(data.token)
        .pipe(
          map((data) => ProjectActions.loadProjectsSuccess({projects: data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  add = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.addProject),
      mergeMap((data) =>
        this.projectService.add({token: data.token, project: data.project})
        .pipe(
          map(data => ProjectActions.addProjectSuccess({project: {...data, teams: []}})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  update = createEffect(()=>
    this.actions$.pipe(
      ofType(ProjectActions.updateProject),
      mergeMap((data) =>
        this.projectService.update({token: data.token, id: data.id, payload: data.data})
        .pipe(
          map(() => ProjectActions.updateProjectSuccess({id: data.id, changes: data.data})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  delete = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.deleteProject),
      mergeMap((data) =>
        this.projectService.delete({token: data.token, id: data.id})
        .pipe(
          map(() => ProjectActions.deleteProjectSuccess({id: data.id})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  removeTeamFromProject = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.removeTeam),
      mergeMap((data) =>
        this.projectService.removeTeamFromProject(data.projectId, data.teamId, data.token)
        .pipe(
          map(() => ProjectActions.removeTeamSuccess({teamId: data.teamId, projectId: data.projectId})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )

  addTeamToProject = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.addTeamToProject),
      mergeMap((data) =>
        this.projectService.addTeamToProject(data.projectId, data.teamId, data.token)
        .pipe(
          map((result) => ProjectActions.addTeamToProjectSuccess({team: result.teams?.find(team => team.id === data.teamId)!, projectId: data.projectId})),
          catchError(response => of(ErrorActions.loadErrors({errors: Array.isArray(response.error.message)? response.error.message: [response.error.message]})))
        )
      )
    )
  )
}
