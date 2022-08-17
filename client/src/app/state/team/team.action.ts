import { createAction, props } from "@ngrx/store";
import { CreateTeamDto, UpdateTeamDto } from "src/app/dto/team/team.dto";
import { Employee } from "src/app/models/employee";
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
  props<{ token:string,  team: UpdateTeamDto, id: number }>()
)

export const updateTeamSuccess = createAction(
  "Update team success",
  props<{id: number, changes: UpdateTeamDto | Team}>()
)

export const deleteTeam = createAction(
  "Delete team",
  props<{token: string, id: number}>()
)

export const deleteTeamSuccess = createAction(
  "Delete team success",
  props<{id: number}>()
)

export const setSelectTeamId = createAction(
  "Select team ID",
  props<{id: number}>()
)

export const loadMoreInfoForTeam = createAction(
  "Load more info for selected team",
  props<{id: number, token: string}>()
)

export const addEmployeeToTeam = createAction(
  "Add employee to team",
  props<{token: string, teamId: number, employeeId: number}>()
)

export const addEmployeeToTeamSuccess = createAction(
  "Add employee to team success",
  props<{employee: Employee, id: number}>()
)

export const removeEmployeeFromTeam = createAction(
  "Remove employee from team",
  props<{teamId: number, employeeId: number, token: string}>()
)

export const removeEmployeeFromTeamSuccess = createAction(
  "Remove employee from team success",
  props<{teamId: number, employeeId: number}>()
)


