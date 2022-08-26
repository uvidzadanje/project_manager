import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { EmployeeType } from "src/app/models/employee-type";
import * as Actions from "./employee-type.action"

export interface EmployeeTypeState extends EntityState<EmployeeType> {

}

const adapter = createEntityAdapter<EmployeeType>();

export const initialState: EmployeeTypeState = adapter.getInitialState();

export const employeeTypeReducer = createReducer(
  initialState,
  on(Actions.loadEmployeeTypesSuccess, (state, {employeeTypes}) =>
    adapter.setAll(employeeTypes, state)
  )
)
