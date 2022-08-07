import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Project } from "src/app/models/project";
import * as Actions from "./project.action";

export interface ProjectState extends EntityState<Project> {

}

const adapter = createEntityAdapter<Project>();

export const initialState = adapter.getInitialState();

export const projectReducer = createReducer(
  initialState,
  on(Actions.loadProjectsSuccess, (state, {projects}) =>
    adapter.setAll(projects, state)
  ),
  on(Actions.addProjectSuccess, (state, {project}) =>
    adapter.addOne(project, state)
  ),
  on(Actions.updateProjectSuccess, (state, {project}) => {
    const {id, ...changes} = project;
    return adapter.updateOne(
      {
        id,
        changes
      },
      state
    )
  }
  ),
  on(Actions.deleteProjectSuccess, (state, {id}) =>
    adapter.removeOne(id, state)
  )
)
