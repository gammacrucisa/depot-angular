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
            <div *ngIf="form">
                <h2>{{form.name}} details!</h2>
                <div><label>id: </label>{{form.id}}</div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="form.name" placeholder="name"/>
                </div>
                <button (click)="goBack()">Back</button>
            </div>
            `
    ,
})
    export class FormDetailComponent implements OnInit {
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
