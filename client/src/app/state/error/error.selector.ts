import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const errorFeature = createSelector(
  (state: AppState) => state.errors,
  (errors) => errors
)

export const selectErrors = createSelector(
  errorFeature,
  (errors) => errors.ids.map(id => errors.entities[id]).filter(error => !!error).map(error => <string>error)
)
