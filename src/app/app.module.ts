import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { counterReducer } from './store/counter/counter.reducer';
import { usersReducer } from './store/users/users.reducer';
import { ControlsComponent } from './views/counter/components/controls/controls.component';
import { MainContainerComponent } from './views/counter/components/main-container/main-container.component';
import { UsersContainerComponent } from './views/users/components/users-container/users-container.component';
import { UsersControlsComponent } from './views/users/components/users-controls/users-controls.component';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffectService } from './store/users/users.effect.service';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ControlsComponent,
    UsersContainerComponent,
    UsersControlsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([UsersEffectService]),
    StoreModule.forRoot({ counter: counterReducer, users: usersReducer }),
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
