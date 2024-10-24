import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { FolderExplorerComponent } from './components/folder-explorer/folder-explorer.component';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    OrdinalPipe,
    FormsModule,
    FolderExplorerComponent,
    MaterialDemoComponent,
    CounterComponent,
    TodoListComponent,
    AddTodoComponent,
    EmployeeListComponent,
    AddEmployeeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_august_2024_2';
  cars: string[] = ['Tata', 'Honda']
  addResult: number = 0;
  num: number = 21;

  addition(a: any, b: any) {
    this.addResult = +a + +b;
  }
  multiplication(a: number, b: number) {
    return a * b;
  }
  isEven(n: number) {
    return n % 2 == 0 ? 'even' : 'odd';
  }
  addNewCar(newCar: string) {
    this.cars.push(newCar)
  }
}
