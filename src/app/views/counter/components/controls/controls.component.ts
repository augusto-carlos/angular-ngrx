import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { decrement, increment } from 'src/app/store/counter/counter.actions';
import { ICounterState } from 'src/app/store/counter/counter.reducer';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
})
export class ControlsComponent implements OnInit {
  counter$ = this.counterStore.select('counter');

  constructor(private counterStore: Store<{ counter: ICounterState }>) {}

  ngOnInit(): void {}

  increment() {
    this.counterStore.dispatch(increment());
  }

  decrement() {
    this.counterStore.dispatch(decrement());
  }
}
