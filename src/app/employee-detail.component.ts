import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';



@Component({
    selector: 'employee-detail',
    template:
            `
            <div *ngIf="employee">
                <h2>{{employee.name}} details!</h2>
                <div><label>id: </label>{{employee.id}}</div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="employee.name" placeholder="name"/>
                </div>
                <button (click)="goBack()">Back</button>
            </div>
            `
    ,
})
export class EmployeeDetailComponent implements OnInit {
    @Input() employee: Employee;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private location: Location
    ) {};

    ngOnInit(): void {
        console.log('hola');
        this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe(employee => this.employee = employee);
    }

    goBack(): void {
        this.location.back();
    }
}
