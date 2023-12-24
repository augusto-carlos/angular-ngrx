import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { loadUsersSuccess, setUsers } from '../users/users.actions';

export interface IUserState {
  users: UserModel[];
}

export const usersReducer = createReducer(
  [],
  on(setUsers, (state: any, { payload }) => state.concat(payload)),
  on(loadUsersSuccess, (state: any, { payload }) => state.concat(payload))
);
