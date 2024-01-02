import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { loadUsersSuccess, setUsers } from './users.actions';

export interface IUserState {
  users: UserModel[];
}

export const usersReducer = createReducer(
  [],
  on(setUsers, (state: any, { users }) => state.concat(users)),
  on(loadUsersSuccess, (state: any, { users }) => state.concat(users))
);
