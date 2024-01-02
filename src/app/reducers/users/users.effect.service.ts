import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers, loadUsersSuccess } from './users.actions';

@Injectable({
  providedIn: 'root',
})
export class UsersEffectService {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  logAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers.type),
      exhaustMap(() =>
        this.usersService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
