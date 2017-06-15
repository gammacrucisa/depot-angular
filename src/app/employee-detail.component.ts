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
                <h2>{{employee.nameFirst}} {{employee.nameLast}}</h2>
                <div><label>id: </label> {{employee.id}}</div>
                <div>
                    <label>First Name: </label> <input [(ngModel)]="employee.nameFirst" placeholder="nameFirst"/><br />
                    <label>Last Name: </label> <input [(ngModel)]="employee.nameLast" placeholder="nameLast"/><br />
                    <label>Role: </label> <input [(ngModel)]="employee.role" placeholder="role"/><br />
                    <label>Bio: </label> <input [(ngModel)]="employee.bio" placeholder="bio"/><br />
                    <label>Email: </label> <input [(ngModel)]="employee.email" placeholder="email"/><br />
                    <label>Phone: </label> <input [(ngModel)]="employee.phone" placeholder="phone"/><br />
                    <label>Twtitter: </label> <input [(ngModel)]="employee.twitter" placeholder="twitter"/><br />
                    <label>Facebook: </label> <input [(ngModel)]="employee.facebook" placeholder="facebook"/><br />
                    <label>Instagram: </label> <input [(ngModel)]="employee.instagram" placeholder="instagram"/>
                </div>
                <!--<button (click)="goBack()">Back</button>-->
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

/*

export class Employee { // All public data
    id: number;
    nameFirst: string;
    nameLast: string;
    role: string;
    bio: string;
    email: string;
    phone: string;
    twitter: string;
    facebook: string;
    instagram: string;
}
*/


