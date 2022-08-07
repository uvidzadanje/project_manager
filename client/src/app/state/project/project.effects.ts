import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { Project } from "src/app/models/project";
import { ProjectService } from "src/app/services/project.service";
import * as ProjectActions from "./project.action";

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
          map((data) => ProjectActions.loadProjectsSuccess({projects: data as Project[]}))
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
          map(data => ProjectActions.addProjectSuccess({project: data as Project}))
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
          map((data) => ProjectActions.updateProjectSuccess({project: data as Project}))
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
          map(() => ProjectActions.deleteProjectSuccess({id: data.id}))
        )
      )
    )
  )
}
