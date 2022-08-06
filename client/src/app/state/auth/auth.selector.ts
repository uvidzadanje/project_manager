import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/app.state";

export const authSelectorFeature = createSelector(
  (state: AppState) => state.auth,
  (auth) => auth
)

export const selectAuthError = createSelector(
  authSelectorFeature,
  (auth) => auth.authError
)

export const selectAuthInfo = createSelector(
  authSelectorFeature,
  (auth) => {
    const {authError, ...authInfo} = auth;
    return authInfo;
  }
)

export const selectAuthToken = createSelector(
  selectAuthInfo,
  (authInfo) => authInfo.accessToken
)
