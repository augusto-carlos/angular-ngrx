import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ControlsComponent } from './components/controls/controls.component';
import { StoreModule } from '@ngrx/store';
import { ICounterState, counterReducer } from '../store/counter.reducer';

@NgModule({
  declarations: [AppComponent, MainContainerComponent, ControlsComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot<ICounterState>({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
