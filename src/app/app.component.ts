import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from './auth/auth.selectors';
import { AppState } from './reducers';
import { login, logout } from './auth/reducers/auth.actions';
import { selectCurrentUser } from './reducers/users/users.selectors';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  message = this.messageService.message();
  isLoggedIn$ = this.store.select(isLoggedInSelector);
  currentUserName$ = this.store
    .select(selectCurrentUser)
    .pipe(map((user) => user?.name));

  constructor(
    private messageService: MessageService,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.store.dispatch(login({ user }));
    }
  }

  logout() {
    this.store.dispatch(logout());
  }
}
