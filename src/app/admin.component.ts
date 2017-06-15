import { Component } from '@angular/core';

@Component({
    selector: 'my-admin',
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
        `
    ,
})
export class AdminComponent {
    title: string = 'Nich Admin';
}
