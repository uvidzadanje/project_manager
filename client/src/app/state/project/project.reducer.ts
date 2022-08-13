import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Project } from "src/app/models/project";
import * as Actions from "./project.action";

export interface ProjectState extends EntityState<Project> {
  selectedProjectId: number;
}

const adapter = createEntityAdapter<Project>();

export const initialState = adapter.getInitialState({
  selectedProjectId: 0
});

export const projectReducer = createReducer(
  initialState,
  on(Actions.loadProjectsSuccess, (state, {projects}) =>
    adapter.setAll(projects, state)
  ),
  on(Actions.addProjectSuccess, (state, {project}) =>
    adapter.addOne(project, state)
  ),
  on(Actions.updateProjectSuccess, (state, {id, changes}) => {
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
  ),
  on(Actions.setSelectedProjectId, (state, {id}) => {
    return {
      ...state,
      selectedProjectId: id
    }
  }),
  on(Actions.removeTeamSuccess, (state, {teamId, projectId}) =>
    {
      return adapter.updateOne(
        {
          id: projectId,
          changes: {
            teams: state.entities[projectId]?.teams?.filter(team => team.id !== teamId)
          }
        },
        state
      )
    }
  ),
  on(Actions.addTeamToProjectSuccess, (state, {team, projectId}) =>
    adapter.updateOne(
      {
        id: projectId,
        changes: {
          teams: [...state.entities[projectId]?.teams!, team]
        }
      },
      state
    )
  )
)
