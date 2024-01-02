import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { finalize, map, tap } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../../reducers';
import { login } from '../../reducers/auth.actions';
import { AppState } from 'src/app/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  loggedUser$ = this.store.select('auth').pipe(map(({ user }) => user));

  constructor(
    public router: Router,
    private readonly store: Store<AppState>,
    private messageService: MessageService,
    private readonly authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormBuilder().group({
      email: ['augusto@mail.com', Validators.required],
      password: ['ujUP3zEG9aLnZnd', Validators.required],
    });
  }

  login() {
    this.isLoading = true;
    this.authService
      .login(this.form.value)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (user) => {
          this.messageService.showSuccessMessage('🎉 Login feito com sucesso!'),
            this.store.dispatch(login({ user }));
          this.router.navigateByUrl('/');
        },
        error: (err) =>
          this.messageService.showWarningMessage(
            'Erro ao fazer login na aplicação'
          ),
      });
  }
}
