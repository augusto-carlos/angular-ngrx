import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { counterReducer } from './reducers/counter/counter.reducer';
import { usersReducer } from './reducers/users/users.reducer';
import { ControlsComponent } from './views/examples/components/controls/controls.component';
import { MainContainerComponent } from './views/examples/components/main-container/main-container.component';
import { UsersContainerComponent } from './views/examples/components/users-container/users-container.component';
import { UsersControlsComponent } from './views/examples/components/users-controls/users-controls.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffectService } from './reducers/users/users.effect.service';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './views/app-routing.module';
import { ExamplesComponent } from './views/examples/examples.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { metaReducers, reducers } from './reducers';

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
    AppRoutingModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule,
    //Ngrx Modules
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
