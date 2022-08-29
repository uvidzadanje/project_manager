import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as Actions from "./error.action";

export interface ErrorState extends EntityState<string> {}

const adapter = createEntityAdapter<string>();

export const initialState = adapter.getInitialState();

export const errorReducer = createReducer(
  initialState,
  on(Actions.loadErrors, (state, {errors}) =>
    adapter.setAll(errors, state)
  )
)
