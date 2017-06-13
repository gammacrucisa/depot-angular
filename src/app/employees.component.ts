/*
    +ngModel requires the import of FormsModule in root module
    +You added a two-way data binding to the <input> element using the built-in ngModel directive.
    +The ngModel directive propagates changes to every other binding of the hero.name.
*/

import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
    selector: 'my-employee',
    styles: [
        `
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .employees {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .employees li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .employees li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .employees li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .employees .text {
                position: relative;
                top: -3px;
            }
            .employees .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
            }
        `
    ],
    template:
        `
        <h2>Employees</h2>
        <ul class="employees">
            <li *ngFor="let employee of employees" 
                [class.selected]="employee === selectedEmployee"
                (click)="onSelect(employee)">
                <span class="badge">{{employee.id}}</span> {{employee.name}}
            </li>
        </ul>
        <employee-detail [employee]="selectedEmployee"></employee-detail>
        `,
    providers: [ EmployeeService ],
})
export class EmployeesComponent implements OnInit {
    employees: Employee[];
    selectedEmployee: Employee;

    constructor(private employeeService: EmployeeService) {};

    ngOnInit(): void {
        this.getEmployees();
//        this.getEmployeesSlowly();
    };

    getEmployees(): void {
//      this.empployee = this.employeeService.getEmployees();
        this.employeeService.getEmployees()
                .then((employees) => { this.employees = employees; });
    };

    onSelect(employee: Employee): void {
        this.selectedEmployee = employee;
    };
};
