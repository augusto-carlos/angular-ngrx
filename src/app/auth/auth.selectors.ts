import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './reducers';

const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedInSelector = createSelector(
  selectAuthState,
  (auth: AuthState) => !!auth.user
);
