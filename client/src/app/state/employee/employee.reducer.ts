import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/models/employee";
import * as Actions from "src/app/state/employee/employee.action";


export interface EmployeeState extends EntityState<Employee> {
  selectedEmployeeIds: number[]
}

const adapter = createEntityAdapter<Employee>();

export const initialState: EmployeeState = adapter.getInitialState({
  selectedEmployeeIds: []
});

export const employeeReducer = createReducer(
  initialState,
  on(Actions.loadEmployeesSuccess, (state, { employees }) =>
    adapter.setAll(employees, state)
  ),
  on(Actions.setSelectedEmployeeIds, (state, {employeeIds}) => {
    return {
      ...state,
      selectedEmployeeIds: [...employeeIds]
    }
  }),
  on(Actions.addSelectedEmployeeId, (state, {id}) => {
    return {
      ...state,
      selectedEmployeeIds: [...state.selectedEmployeeIds, id]
    }
  }),
  on(Actions.deleteSelectedEmployeeId, (state, {id}) => {
    return {
      ...state,
      selectedEmployeeIds: state.selectedEmployeeIds.filter(employeeId => employeeId !== id)
    }
  })
)
