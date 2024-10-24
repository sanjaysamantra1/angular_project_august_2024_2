import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { todoReducer } from './ngrx/reducers/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './ngrx/effects/employee.effects';
import { employeesReducer } from './ngrx/reducers/employee.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    provideStore({ 
      count: counterReducer, 
      todos: todoReducer, 
      employees: employeesReducer 
    }),
    provideEffects(EmployeeEffects),
    provideHttpClient()
  ]
};
