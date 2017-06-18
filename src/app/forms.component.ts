/*
    +ngModel requires the import of FormsModule in root module
    +You added a two-way data binding to the <input> element using the built-in ngModel directive.
    +The ngModel directive propagates changes to every other binding of the employee.name.
*/

import { Component, OnInit } from '@angular/core';

import { Form } from './form';
import { FormService } from './form.service';


@Component({
    selector: 'my-form',
    styles: [
        `
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .forms {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .forms li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .forms li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .forms li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .forms .text {
                position: relative;
                top: -3px;
            }
            .forms .badge {
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

        <!--<h2>Forms</h2>-->
        <ul class="forms">
            <li *ngFor="let form of forms" 
                [class.selected]="form === selectedForm"
                (click)="onSelect(form)">
                <span class="badge">{{form.id}}</span> {{form.name}}
            </li>
        </ul>
        <form-detail [form]="selectedForm"></form-detail>
        </div>
        `,
    providers: [ FormService ],
})
export class FormsComponent implements OnInit {
    title: string = 'Forms';
    forms: Form[];
    selectedForm: Form;

    constructor(private formService: FormService) {};

    ngOnInit(): void {
        this.getForms();
//        this.getFormsSlowly();
    };

    getForms(): void {
//      this.empployee = this.formService.getForms();
        this.formService.getForms()
                .then((forms) => { this.forms = forms.slice(1); });
    };

    onSelect(form: Form): void {
        this.selectedForm = form;
    };
};
