import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { Employee } from "src/app/models/employee";

export const employeeFeature = createSelector(
  (state: AppState) => state.employees,
  (employees) => employees
)

export const selectEmployees = createSelector(
  employeeFeature,
  (employees) => employees.ids
  .map(id => employees.entities[id])
  .filter(employee => !!employee)
  .map(employee => <Employee> employee)
)
