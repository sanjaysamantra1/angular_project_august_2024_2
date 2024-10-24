import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "../../services/employee.service";
import { exhaustMap, map, catchError, of } from "rxjs";
import { deleteEmployee, fetchEmployees } from "../actions/employee.actions";

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService
    ) { }

    loadEmployees$ = createEffect(() => this.actions$.pipe(
        ofType(fetchEmployees),
        exhaustMap(() => this.employeeService.fetchAllEmployees()
            .pipe(
                map(Employees =>
                    ({ type: '[Employees API] Employees Loaded Successfully', payload: Employees })
                ),
                catchError(() => of({ type: '[Employees API] Employees Loaded Error' }))
            ))
    ));
    deleteEmployees$ = createEffect(() => this.actions$.pipe(
        ofType(deleteEmployee),
        exhaustMap((action: any) => this.employeeService.deleteEmployee(action.id)
        .pipe(
            map(Employee => {
                alert('Employee Deleted Succesfully');
                return ({ type: '[EmployeeList Page] Fetch Employees' })
            }),
            catchError(() => of({ type: '[Employees API] Employee Delete Error' }))
        ))
    ));
}