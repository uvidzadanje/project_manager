import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { EmployeeType } from "src/app/models/employee-type";

export const employeeTypeFeature = createSelector(
  (state: AppState) => state.employeeType,
  (employeeTypes) => employeeTypes
)

export const selectEmployeeTypes = createSelector(
  employeeTypeFeature,
  (employeeTypes) => employeeTypes.ids
  .map(id => employeeTypes.entities[id])
  .filter(employeeType => !!employeeType)
  .map(employeeType => <EmployeeType> employeeType)
)
