import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Team } from "src/app/models/team";

export const teamSelectorFeature = createSelector(
  (state: AppState) => state.teams,
  (teams) => teams
)

export const selectTeams = createSelector(
  teamSelectorFeature,
  (teams) => teams.ids
  .map((id) => teams.entities[id])
  .filter((team) => !!team)
  .map((team) => <Team>team)
)

export const selectTeamId = createSelector(
  teamSelectorFeature,
  (teams) => teams.selectedTeamId
)

export const selectSelectedTeam = createSelector(
  teamSelectorFeature,
  selectTeamId,
  (teams, selectedTeamId) => teams.entities[selectedTeamId]
)
