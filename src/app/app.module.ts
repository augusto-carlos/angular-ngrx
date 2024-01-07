import { HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { metaReducers, reducers } from './reducers';
import { UsersEffectService } from './reducers/users/users.effect.service';
import { AppRoutingModule } from './views/app-routing.module';
import { ControlsComponent } from './views/examples/components/controls/controls.component';
import { MainContainerComponent } from './views/examples/components/main-container/main-container.component';
import { UsersContainerComponent } from './views/examples/components/users-container/users-container.component';
import { UsersControlsComponent } from './views/examples/components/users-controls/users-controls.component';
import { ExamplesComponent } from './views/examples/examples.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ControlsComponent,
    UsersContainerComponent,
    UsersControlsComponent,
    ExamplesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    //ngrx modules
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    EffectsModule.forRoot([UsersEffectService]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
