import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Form } from './form';
import { FormService } from './form.service';



@Component({
    selector: 'form-detail',
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

            <div *ngIf="form">
                <h2>{{form.name}}</h2>
                <div><label>id: </label> {{form.id}}</div>
                <div>
                    <label>Name: </label> <input [(ngModel)]="form.name" placeholder="name"/><br />
                    <label>Email: </label> <input [(ngModel)]="form.email" placeholder="email"/><br />
                    <label>Phone: </label> <input [(ngModel)]="form.phone" placeholder="phone"/>
                </div>
                <button (click)="goBack()">Back</button>
            </div>
            </div>
            `
    ,
})
    export class FormDetailComponent implements OnInit {
    title: string = 'Forms';
    @Input() form: Form;

    constructor(
        private formService: FormService,
        private route: ActivatedRoute,
        private location: Location
    ) {};

    ngOnInit(): void {
        console.log('hola');
        this.route.params
            .switchMap((params: Params) => this.formService.getForm(+params['id']))
            .subscribe(form => this.form = form);
    }

    goBack(): void {
        this.location.back();
    }
}



/*
    id: number;
    name: string;
    email: string;
    phone: string;
*/
