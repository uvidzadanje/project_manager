import { createAction, props } from "@ngrx/store";
import { CreateResponsibilityDto, UpdateResponsibilityDto } from "src/app/dto/responsibility/responsibility.dto";
import { Responsibility } from "src/app/models/responsibility";

export const getResponsibilityByEmployee = createAction(
  "Get responsibility by employee",
  props<{token: string, id: number}>()
)

export const getResponsibilityByProjectAndTeam = createAction(
  "Get responsibility by project and team",
  props<{token: string, teamId: number, projectId: number}>()
)

export const loadResponsibilitySuccess = createAction(
  "Load responsibility success",
  props<{responsibilities: Responsibility[]}>()
)

export const addResponsibility = createAction(
  "Add responsibility",
  props<{responsibility: CreateResponsibilityDto, token: string}>()
)

export const addResponsibilitySuccess = createAction(
  "Add responsibility success",
  props<{responsibility: Responsibility}>()
)

export const updateResponsibility = createAction(
  "Update responsibility",
  props<{id: number, changes: UpdateResponsibilityDto, token: string}>()
)

export const updateResponsibilitySuccess = createAction(
  "Update responsibility success",
  props<{id: number, changes: UpdateResponsibilityDto}>()
)

export const deleteResponsibility = createAction(
  "Delete responsibility",
  props<{id: number, token: string}>()
)

export const deleteResponsibilitySuccess = createAction(
  "Delete responsibility success",
  props<{id: number}>()
)
