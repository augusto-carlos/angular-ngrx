import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

export interface ICounterState {
  counter: number;
}

export const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);
