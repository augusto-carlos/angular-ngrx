import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { UserActions } from 'src/app/reducers/users/users.actions-type';
import { IUserState } from 'src/app/reducers/users/users.reducer';
import {
  selectAllUsers,
  selectUsersTotal,
} from 'src/app/reducers/users/users.selectors';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent {
  users$ = this.store.select(selectAllUsers);
  usersTotal$ = this.store.select(selectUsersTotal);

  constructor(private store: Store<AppState>) {}

  deleteUser(id: string) {
    this.store.dispatch(UserActions.deleteUser({ id }));
  }

  selectUser(id: string) {
    this.store.dispatch(UserActions.selectUserId({ id }));
  }
}
