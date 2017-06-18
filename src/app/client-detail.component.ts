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

            <div class="white-bg-full">
            <h1>{{title}}</h1>
            <nav class="admin-nav">
                <a routerLink="/">Home</a> | 
                <a routerLink="/dashboard">Dashboard</a> | 
                <a routerLink="/employees">Employees</a> |  
                <a routerLink="/clients">Clients</a> | 
                <a routerLink="/forms">Forms</a> | more
            </nav>

            <div *ngIf="client">
                <h2>{{client.company}}</h2>
                <div><label>id: </label> {{client.id}}</div>
                <div>
                    <label>Company: </label> <input [(ngModel)]="client.company" placeholder="company"/><br />
                    <label>Contact (Person): </label> <input [(ngModel)]="client.contact" placeholder="contact"/><br />
                    <label>Phone: </label> <input [(ngModel)]="client.phone" placeholder="phone"/><br />
                    <label>Street1: </label> <input [(ngModel)]="client.street1" placeholder="street1"/><br />
                    <label>Street2: </label> <input [(ngModel)]="client.street2" placeholder="street2"/><br />
                    <label>City: </label> <input [(ngModel)]="client.city" placeholder="city"/><br />
                    <label>State: </label> <input [(ngModel)]="client.state" placeholder="state"/><br />
                    <label>Zip: </label> <input [(ngModel)]="client.zip" placeholder="zip"/><br />
                    <label>Email Primary: </label> <input [(ngModel)]="client.emailPrimary" placeholder="emailPrimary"/><br />
                    <label>Email Secondary: </label> <input [(ngModel)]="client.emailSecondary" placeholder="emailSecondary"/><br />
                    <label>Site1: </label> <input [(ngModel)]="client.site1" placeholder="site1"/><br />
                    <label>Site2: </label> <input [(ngModel)]="client.site2" placeholder="site2"/><br />
                    <label>Site3: </label> <input [(ngModel)]="client.site3" placeholder="site3"/><br />
                    <label>Facebook: </label> <input [(ngModel)]="client.facebook" placeholder="facebook"/><br />
                    <label>Twitter: </label> <input [(ngModel)]="client.twitter" placeholder="twitter"/><br />
                    <label>Instagram: </label> <input [(ngModel)]="client.instagram" placeholder="instagram"/><br />
                    <label>Logo White: </label> <input [(ngModel)]="client.logoWhite" placeholder="logoWhite"/><br />
                    <label>Logo Black: </label> <input [(ngModel)]="client.logoBlack" placeholder="logoBlack"/>
                </div>
                <button (click)="goBack()">Back</button>
            </div>
            </div>
            `
    ,
})
export class ClientDetailComponent implements OnInit {
    title: string = 'Clients';
    @Input() client: Client;

    constructor(
        private clientService: ClientService,
        private route: ActivatedRoute,
        private location: Location
    ) {};

    ngOnInit(): void {
        console.log('hola');
        this.route.params
            .switchMap((params: Params) => this.clientService.getClient(+params['id']))
            .subscribe(client => this.client = client);
    }

    goBack(): void {
        this.location.back();
    }
}

/*
    id: number;
    company: string;
    contact: string;
    phone: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: number;
    emailPrimary: string;
    emailSecondary: string;
    site1: string;
    site2: string;
    site3: string;
    facebook: string;
    twitter: string;
    instagram: string;
    logoWhite: string;
    logoBlack: string;
*/
