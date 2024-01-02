import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/auth.selectors';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {
  isLoggedIn$ = this.store.select(isLoggedInSelector);

  constructor(private readonly store: Store<AppState>) {}
}
