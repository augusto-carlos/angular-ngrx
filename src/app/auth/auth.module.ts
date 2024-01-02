import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './components/login/login.component';
import * as fromAuth from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AuthModule {
  // static forRoot(): ModuleWithProviders<AuthModule> {
  //   return {
  //     ngModule: AppModule,
  //   };
  // }
}
