import { createAction, props } from "@ngrx/store";

export const loadErrors = createAction(
  "Load errors",
  props<{errors: string[]}>()
)
