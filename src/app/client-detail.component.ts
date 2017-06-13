import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Client } from './client';
import { ClientService } from './client.service';



@Component({
    selector: 'client-detail',
    template:
            `
            <div *ngIf="client">
                <h2>{{client.name}} details!</h2>
                <div><label>id: </label>{{client.id}}</div>
                <div>
                    <label>name: </label>
                    <input [(ngModel)]="client.name" placeholder="name"/>
                </div>
                <button (click)="goBack()">Back</button>
            </div>
            `
    ,
})
export class ClientDetailComponent implements OnInit {
    @Input() client: Client;

    constructor(
        private clientService: ClientService,
        private route: ActivatedRoute,
        private location: Location
    ) {};

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.clientService.getClient(+params['id']))
            .subscribe(client => this.client = client);
    }

    goBack(): void {
        this.location.back();
    }
}
