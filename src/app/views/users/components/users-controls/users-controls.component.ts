import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModel } from 'src/app/models/user.model';
import { loadUsers, setUsers } from 'src/app/store/users/users.actions';
import { IUserState } from 'src/app/store/users/users.reducer';

@Component({
  selector: 'app-users-controls',
  templateUrl: './users-controls.component.html',
  styleUrls: ['./users-controls.component.scss'],
})
export class UsersControlsComponent {
  constructor(private store: Store<{ users: IUserState }>) {}

  loadUser() {
    this.store.dispatch(loadUsers());
  }

  addUser(data: string) {
    const payload = [JSON.parse(data)];
    this.store.dispatch(setUsers({ payload }));
  }
}
