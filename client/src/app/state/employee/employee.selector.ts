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

export const selectSelectedEmployeeIds = createSelector(
  employeeFeature,
  (employees) => employees.selectedEmployeeIds
)

export const selectEmployeeWithoutResponsibility = createSelector(
  selectEmployees,
  selectSelectedEmployeeIds,
  (employees, employeeIds) => employees.filter(employee => employeeIds.every(id => id !== employee.id))
)
