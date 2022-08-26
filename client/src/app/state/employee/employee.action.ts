import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/models/employee";

export const loadEmployees = createAction(
  "Load employees",
  props<{token: string}>()
);

export const loadEmployeesByTeam = createAction(
  "Load employees by team",
  props<{teamId: number}>()
)

export const loadEmployeesSuccess = createAction(
  "Load employees success",
  props<{ employees: Employee[] }>()
)

export const setSelectedEmployeeIds = createAction(
  "Set selected employee ID-s",
  props<{employeeIds: number[]}>()
)

export const addSelectedEmployeeId = createAction(
  "Add selected employee ID",
  props<{id: number}>()
)

export const deleteSelectedEmployeeId = createAction(
  "Remove selected employee ID",
  props<{id: number}>()
)
