/*
    +ngModel requires the import of FormsModule in root module
    +You added a two-way data binding to the <input> element using the built-in ngModel directive.
    +The ngModel directive propagates changes to every other binding of the employee.name.
*/

import { Component, OnInit } from '@angular/core';

import { Client } from './client';
import { ClientService } from './client.service';


@Component({
    selector: 'my-client',
    styles: [
        `
            .selected {
                background-color: #CFD8DC !important;
                color: white;
            }
            .clients {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
            }
            .clients li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
            }
            .clients li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
            }
            .clients li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
            }
            .clients .text {
                position: relative;
                top: -3px;
            }
            .clients .badge {
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
            <h1>{{title}}</h1>
            <nav>
                <a routerLink="/dashboard">Dashboard</a>
                <a routerLink="/employees">Employees</a>    
                <a routerLink="/clients">Clients</a>    
                <a routerLink="/forms">Forms</a>    
            </nav>
            <router-outlet></router-outlet>

        <h2>Clients</h2>
        <ul class="clients">
            <li *ngFor="let client of clients" 
                [class.selected]="client === selectedClient"
                (click)="onSelect(client)">
                <span class="badge">{{client.id}}</span> {{client.company}} ({{client.contact}})
            </li>
        </ul>
        <client-detail [client]="selectedClient"></client-detail>
        `,
    providers: [ ClientService ],
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    selectedClient: Client;

    constructor(private clientService: ClientService) {};

    ngOnInit(): void {
        console.log('hola');
        this.getClients();
//        this.getClientsSlowly();
    };

    getClients(): void {
//      this.empployee = this.clientService.getClients();
        this.clientService.getClients()
                .then((clients) => { this.clients = clients; });
    };

    onSelect(client: Client): void {
        this.selectedClient = client;
    };
};
