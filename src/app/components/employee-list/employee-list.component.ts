import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { deleteEmployee, fetchEmployees } from '../../ngrx/actions/employee.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  // Selector
  employees$: Observable<Employee[]> = this.store.select(state => state.employees);

  // injecting store
  constructor(private store: Store<{ employees: Employee[] }>) {
  }

  ngOnInit() {
    this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    // this.store.dispatch(fetchEmployees());
  }

  deleteEmployee(id: any) {
    this.store.dispatch(deleteEmployee({id}));
  }

}
