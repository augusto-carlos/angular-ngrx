import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICounterState } from 'src/app/store/counter/counter.reducer';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent {
  counter$ = this.counterStore.select('counter');

  constructor(private counterStore: Store<{ counter: ICounterState }>) {}
}
