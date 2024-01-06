import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, usersFeatureKey } from './users.reducer';
import * as fromUsers from './users.reducer';

export const selectUsersState =
  createFeatureSelector<IUserState>(usersFeatureKey);

export const selectAllUsers = createSelector(
  selectUsersState,
  fromUsers.selectAll
);

export const selectUsersTotal = createSelector(
  selectAllUsers,
  (users) => users?.length
);
