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
            <h3>Top Employee</h3>
            <div class="grid grid-pad">
              <div *ngFor="let employee of employees" class="col-1-4">
                <div class="module employee">
                  <h4>{{employee.name}}</h4>
                </div>
              </div>
            </div>
            
        `
    ,
})
export class DashboardComponent implements OnInit {
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
            .then(employees => this.employees = employees.slice(0, 1));
        this.clientService.getClients()
            .then(clients => this.clients = clients.slice(0, 1));
        this.formService.getForms()
            .then(forms => this.forms = forms.slice(0, 1));
    }
}
