import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Responsibility } from "src/app/models/responsibility";
import * as Actions from "./responsibility.action";

export interface ResponsibilityState extends EntityState<Responsibility> {

}

const adapter = createEntityAdapter<Responsibility>();

export const initialState: ResponsibilityState = adapter.getInitialState();

export const responsibilityReducer = createReducer(
  initialState,
  on(Actions.loadResponsibilitySuccess, (state, {responsibilities}) =>
    adapter.setAll(responsibilities, state)
  ),
  on(Actions.addResponsibilitySuccess, (state, {responsibility}) =>
    adapter.addOne(responsibility, state)
  ),
  on(Actions.updateResponsibilitySuccess, (state, {id, changes}) =>
    adapter.updateOne(
      {
        id,
        changes: {
          description: changes.description
        }
      },
      state
    )
  ),
  on(Actions.deleteResponsibilitySuccess, (state, {id}) =>
    adapter.removeOne(id, state)
  )
)
