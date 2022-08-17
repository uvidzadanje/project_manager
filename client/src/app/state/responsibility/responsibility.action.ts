import { createAction, props } from "@ngrx/store";
import { Responsibility } from "src/app/models/responsibility";

export const getResponsibilityByEmployee = createAction(
  "Get responsibility by employee",
  props<{token: string, id: number}>()
)

export const loadResponsibilitySuccess = createAction(
  "Load responsibility success",
  props<{responsibilities: Responsibility[]}>()
)
