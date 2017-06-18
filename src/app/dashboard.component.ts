import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { Client } from './client';
import { Form } from './form';
import { EmployeeService } from './employee.service';
import { ClientService } from './client.service';
import { FormService } from './form.service';

@Component({
    selector: 'my-dashboard',
    template:
        `
            <div class="white-bg-full">
            <h1>{{title}}</h1>
            <nav class="admin-nav">
                <a routerLink="/">Home</a> | 
                <a routerLink="/dashboard">Dashboard</a> | 
                <a routerLink="/employees">Employees</a> |  
                <a routerLink="/clients">Clients</a> | 
                <a routerLink="/forms">Forms</a> | more
            </nav>
            <router-outlet></router-outlet>

            <h3>Employees</h3>
            <div class="grid grid-pad">
              <a *ngFor="let employee of employees" class="col-1-4" [routerLink]="['/employeedetail', employee.id]">
                <div class="module employee">
                  <h4>{{employee.nameFirst}}</h4>
                </div>
              </a>
            </div>

            <h3>Clients</h3>
            <div class="grid grid-pad">
              <div *ngFor="let client of clients" class="col-1-4">
                <div class="module employee">
                  <h4>{{client.company}}</h4>
                </div>
              </div>
            </div>

            <h3>Forms</h3>
            <div class="grid grid-pad">
              <div *ngFor="let form of forms" class="col-1-4">
                <div class="module employee">
                  <h4>{{form.name}}</h4>
                </div>
              </div>
            </div>
            
            </div>
        `
    ,
})
export class DashboardComponent implements OnInit {
    title: string = 'Dashboard';
    employees: Employee[];
    clients: Client[];
    forms: Form[];

    constructor(
        private employeeService: EmployeeService,
        private clientService: ClientService,
        private formService: FormService,
    ) {}

    ngOnInit(): void {
        console.log('hola');
        this.employeeService.getEmployees()
            .then(employees => this.employees = employees.slice(1, 5));
        this.clientService.getClients()
            .then(clients => this.clients = clients.slice(1, 5));
        this.formService.getForms()
            .then(forms => this.forms = forms.slice(1, 5));
    }
}
