import { createAction, props } from "@ngrx/store";
import { EmployeeType } from "src/app/models/employee-type";

export const loadEmployeeTypes = createAction("Load employee types");

export const loadEmployeeTypesSuccess = createAction(
  "Load employee types success",
  props<{employeeTypes: EmployeeType[]}>()
)
