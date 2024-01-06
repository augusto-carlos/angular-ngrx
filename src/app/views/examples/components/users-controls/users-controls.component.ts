import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import * as UsersActions from 'src/app/reducers/users/users.actions';

@Component({
  selector: 'app-users-controls',
  templateUrl: './users-controls.component.html',
  styleUrls: ['./users-controls.component.scss'],
})
export class UsersControlsComponent {
  constructor(private store: Store<AppState>) {}

  loadUser() {
    this.store.dispatch(UsersActions?.loadUsers());
  }

  addUser(data: string) {
    const users = [JSON.parse(data)];
    this.store.dispatch(UsersActions?.setUsers({ users }));
  }

  deleteUser(id: string) {
    this.store.dispatch(UsersActions?.deleteUser({ id }));
  }
}
