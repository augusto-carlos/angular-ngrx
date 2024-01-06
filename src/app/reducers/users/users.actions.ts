import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';

export const setUsers = createAction(
  '[Users Component] Set Users',
  props<{ users: UserModel[] }>()
);
export const loadUsers = createAction('[Users Component] Load Users');
export const loadUsersSuccess = createAction(
  '[Users Component] Load Users Success',
  props<{ users: UserModel[] }>()
);

export const deleteUser = createAction(
  '[User Component] Delete User',
  props<{ id: string }>()
);
