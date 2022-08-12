import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Project } from "src/app/models/project";

export const projectSelectorFeature = createSelector(
  (state: AppState) => state.projects,
  (projects) => projects
)

export const selectProjects = createSelector(
  projectSelectorFeature,
  (projects) => projects.ids
  .map((id) => projects.entities[id])
  .filter((project) => !!project)
  .map((project) => <Project>project)
)

export const selectSelectedProjectId = createSelector(
  projectSelectorFeature,
  (projects) => projects.selectedProjectId
)

export const selectSelectedProject = createSelector(
  projectSelectorFeature,
  selectSelectedProjectId,
  (projects, selectedProjectId) => projects.entities[selectedProjectId]
)
