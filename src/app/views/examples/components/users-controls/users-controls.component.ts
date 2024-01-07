import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { AppState } from 'src/app/reducers';
import { UserActions } from 'src/app/reducers/users/users.actions-type';
import { selectCurrentUser } from 'src/app/reducers/users/users.selectors';

@Component({
  selector: 'app-users-controls',
  templateUrl: './users-controls.component.html',
  styleUrls: ['./users-controls.component.scss'],
})
export class UsersControlsComponent {
  form: FormGroup;

  selectedUser$ = this.store
    .select(selectCurrentUser)
    .pipe(map(this.stringifyUser));

  constructor(private store: Store<AppState>) {
    this.form = new FormBuilder().group({
      changes: '',
    });
  }

  loadUser() {
    this.store.dispatch(UserActions.loadUsers());
  }

  updateUser(changes: string) {
    const user = JSON.parse(changes);
    this.store.dispatch(UserActions.updateUser({ user }));
  }

  private stringifyUser(user: any) {
    return JSON.stringify(user, undefined, 4);
  }
}
