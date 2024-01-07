import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, usersFeatureKey } from './users.reducer';
import * as fromUser from './users.reducer';

export const selectUserState =
  createFeatureSelector<IUserState>(usersFeatureKey);

//retrieve the array of users as Observable
export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAll
);

export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectEntities
);

export const selectUsersTotal = createSelector(
  selectUserState,
  fromUser.selectTotal
);

export const selectCurrentUserId = createSelector(
  selectUserState,
  (state) => state.selectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserState,
  selectCurrentUserId,
  (state, userId) => state.entities[userId!]
);
