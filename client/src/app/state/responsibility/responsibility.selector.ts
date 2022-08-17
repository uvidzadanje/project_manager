import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Responsibility } from "src/app/models/responsibility";

export const responsibilityFeature = createSelector(
  (state: AppState) => state.responsibilites,
  (feature) => feature
)

export const selectResponsibilities = createSelector(
  responsibilityFeature,
  (feature) => feature.ids
  .map(id => feature.entities[id])
  .filter(responsibility => !!responsibility)
  .map(responsibility => <Responsibility>responsibility)
)
