import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

export interface ICounterState {
  counter: number;
}

export const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return state + 1;
  }),
  on(decrement, (state) => {
    if (state <= 0) return state;
    return state - 1;
  })
);
