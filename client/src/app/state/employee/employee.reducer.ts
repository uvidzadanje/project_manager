import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/models/employee";
import * as Actions from "src/app/state/employee/employee.action";


export interface EmployeeState extends EntityState<Employee> {

}

const adapter = createEntityAdapter<Employee>();

export const initialState: EmployeeState = adapter.getInitialState();

export const employeeReducer = createReducer(
  initialState,
  on(Actions.loadEmployeesSuccess, (state, { employees }) =>
    adapter.setAll(employees, state)
  )
)
