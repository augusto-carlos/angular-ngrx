import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AuthState } from '../auth/reducers';
import { ICounterState, counterReducer } from './counter/counter.reducer';
import { IUserState, usersReducer } from './users/users.reducer';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../environments/environment';

export interface AppState {
  users: IUserState;
  auth: AuthState;
  counter: ICounterState;
}

export const reducers: ActionReducerMap<AppState | any> = {
  counter: counterReducer,
  users: usersReducer,
  router: routerReducer,
};

//META REDUCERS
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // console.table({ stateBefore: state, action });
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState | any>[] =
  !environment.production ? [logger] : [];
