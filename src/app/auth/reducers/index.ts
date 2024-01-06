import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: UserModel | undefined;
}

// export const reducers: ActionReducerMap<AuthState> = {};

export const initialAuthState: AuthState = { user: undefined };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, { user }) => {
    return { user };
  }),
  on(AuthActions.logout, (state) => {
    return { user: undefined };
  })
);

// export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
