import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo } from '../../ngrx/actions/todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos$: Observable<any> | undefined;

  constructor(private store: Store<any>) {
    this.todos$ = this.store.select('todos'); // selector
  }
  deleteMyTodo(todo: any) {
    this.store.dispatch(deleteTodo(todo));
  }
}
