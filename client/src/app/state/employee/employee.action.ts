import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/models/employee";

export const loadEmployees = createAction(
  "Load employees"
);

export const loadEmployeesSuccess = createAction(
  "Load employees success",
  props<{ employees: Employee[] }>()
)
