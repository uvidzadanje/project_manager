import { createAction, props } from "@ngrx/store";
import { LoginPayloadDto } from "src/app/dto/auth/login-payload.dto";
import { Employee } from "src/app/models/employee";

export const loadEmployees = createAction(
  "Load employees"
);

export const loadEmployeesSuccess = createAction(
  "Load employees success",
  props<{ employees: Employee[] }>()
)
