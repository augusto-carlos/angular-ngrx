import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AppState } from '../../reducers';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from '../auth.selectors';
import { Observable, tap } from 'rxjs';
import { logout } from '../reducers/auth.actions';

export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const store = inject(Store<AppState>);
  const isLoggedIn = store.select(isLoggedInSelector).pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) {
        store.dispatch(logout());
        //   inject(Router).navigateByUrl('/login');
      }
    })
  );

  return isLoggedIn;
};
