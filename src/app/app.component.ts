import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from './auth/auth.selectors';
import { AppState } from './reducers';
import { login, logout } from './auth/reducers/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  message = this.messageService.message();
  isLoggedIn$ = this.store.select(isLoggedInSelector);

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
