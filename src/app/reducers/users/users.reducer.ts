import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import * as UserActions from './users.actions';

export const usersFeatureKey = 'users';

// export interface IUserState {
//   users: UserModel[];
// }

export interface IUserState extends EntityState<UserModel> {
  selectedUserId: string;
}

export const adapter = createEntityAdapter<UserModel>({
  selectId: ({ id }) => id,
  sortComparer: (a: UserModel, b: UserModel) => a.name.localeCompare(b.name),
});

export const initialState = adapter.getInitialState({
  selectedUserId: null,
});

export const usersReducer = createReducer(
  initialState,
  on(UserActions.setUsers, (state: any, { users }) =>
    adapter.addMany(users, state)
  ),
  on(UserActions.loadUsersSuccess, (state: any, { users }) =>
    adapter.addMany(users, state)
  ),
  on(UserActions.deleteUser, (state: any, { id }) =>
    adapter.removeOne(id, state)
  )
);

export const { selectAll } = adapter.getSelectors();
