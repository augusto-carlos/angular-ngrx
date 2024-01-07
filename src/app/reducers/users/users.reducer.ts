import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { UserActions } from './users.actions-type';

export const usersFeatureKey = 'users';

// export interface IUserState {
//   users: UserModel[];
// }

export interface IUserState extends EntityState<UserModel> {
  selectedUserId: string | null;
}

export const adapter = createEntityAdapter<UserModel>({
  selectId: ({ id }) => id,
  sortComparer: (a: UserModel, b: UserModel) => a.name.localeCompare(b.name),
});

export const initialState: IUserState = adapter.getInitialState({
  selectedUserId: null,
});

export const usersReducer = createReducer(
  initialState,
  on(UserActions.setUsers, (state, { users }) => adapter.addMany(users, state)),
  on(UserActions.loadUsersSuccess, (state, { users }) =>
    adapter.addMany(users, state)
  ),
  on(UserActions.deleteUser, (state, { id }) => adapter.removeOne(id, state)),
  on(UserActions.selectUserId, (state, { id }) => ({
    ...state,
    selectedUserId: id,
  })),
  on(UserActions.updateUser, (state, { user }) => {
    const data = { id: user.id, changes: user };
    return adapter.updateOne(data, state);
  })
);

export const { selectAll, selectEntities, selectTotal } =
  adapter.getSelectors();
