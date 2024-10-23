import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$: Observable<number> | undefined;

  constructor(private store: Store<any>) {
    this.count$ = this.store.select('count'); // selector
  }

  decrementCounter() {
    this.store.dispatch(decrement());
  }
  incrementCounter() {
    this.store.dispatch(increment());
  }
  resetCounter() {
    this.store.dispatch(reset());
  }

}
