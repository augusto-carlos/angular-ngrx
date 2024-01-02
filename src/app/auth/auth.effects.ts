import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from './reducers/actions-types';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.login),
        tap(({ user }) =>
          localStorage.setItem('currentUser', JSON.stringify(user))
        )
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('currentUser');
          this.router.navigateByUrl('/auth/login');
        })
      );
    },
    { dispatch: false }
  );
}
