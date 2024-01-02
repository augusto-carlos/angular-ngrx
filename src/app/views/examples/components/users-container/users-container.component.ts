import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { loadUsers } from 'src/app/reducers/users/users.actions';
import { IUserState } from 'src/app/reducers/users/users.reducer';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent {
  users$ = this.usersStore.select('users');
  
  constructor(private usersStore: Store<AppState>) {}
}
