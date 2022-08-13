import { createAction, props } from "@ngrx/store";
import { CreateProjectDto, UpdateProjectDto } from "src/app/dto/project/project.dto";
import { Project } from "src/app/models/project";
import { Team } from "src/app/models/team";

export const loadProjects = createAction(
  "Load projects",
  props<{token: string}>()
)

export const loadProjectsSuccess = createAction(
  "Load projects success",
  props<{projects: Project[]}>()
)

export const addProject = createAction(
  "Add project",
  props<{token: string, project: CreateProjectDto}>()
)

export const addProjectSuccess = createAction(
  "Add project success",
  props<{project: Project}>()
)

export const updateProject = createAction(
  "Update project",
  props<{id: number, token: string, data: UpdateProjectDto}>()
)

export const updateProjectSuccess = createAction(
  "Update project succes",
  props<{id: number, changes: UpdateProjectDto}>()
)

export const deleteProject = createAction(
  "Delete project",
  props<{id: number, token: string}>()
)

export const deleteProjectSuccess = createAction(
  "Delete project success",
  props<{id: number}>()
)

export const setSelectedProjectId = createAction(
  "Set selected project ID",
  props<{id: number}>()
)

export const removeTeam = createAction(
  "Remove team from project",
  props<{teamId: number, projectId: number, token: string}>()
)

export const removeTeamSuccess = createAction(
  "Remove team from project success",
  props<{teamId: number, projectId: number}>()
)

export const addTeamToProject = createAction(
  "Add team to project",
  props<{teamId: number, projectId: number, token: string}>()
)

export const addTeamToProjectSuccess = createAction(
  "Add team to project success",
  props<{projectId: number, team: Team}>()
)
