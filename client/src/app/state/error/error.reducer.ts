import { createReducer, on } from "@ngrx/store";
import * as Actions from "./error.action";

export interface ErrorState {
  errors: string[]
}

export const initialState: ErrorState = {
  errors: []
}

export const errorReducer = createReducer(
  initialState,
  on(Actions.loadErrors, (state, {errors}) => {
    return {
      ...state,
      errors
    }
  }
  )
)
