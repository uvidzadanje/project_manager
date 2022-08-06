import { createAction, props } from "@ngrx/store";
import { CreateTeamDto } from "src/app/dto/team/team.dto";
import { Team } from "src/app/models/team";

export const loadTeams = createAction(
  "Load teams",
  props<{token: string}>(),
);

export const loadTeamsSusscess = createAction(
  "Load teams success",
  props<{ teams: Team[] }>()
)

export const addTeam = createAction(
  "Add team",
  props<{token: string, team: CreateTeamDto}>()
)

export const addTeamSuccess = createAction(
  "Add team success",
  props<{team: Team}>()
)

export const updateTeam = createAction(
  "Update team",
  props<{ token:string,  team: CreateTeamDto, id: number }>()
)

export const updateTeamSuccess = createAction(
  "Update team success",
  props<{team: Team}>()
)

export const deleteTeam = createAction(
  "Delete team",
  props<{token: string, id: number}>()
)

export const deleteTeamSuccess = createAction(
  "Delete team success",
  props<{id: number}>()
)
