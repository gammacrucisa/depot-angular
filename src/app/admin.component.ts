import { Component } from '@angular/core';

@Component({
    selector: 'my-admin',
    template:
         
        `

            <h1>{{title}}</h1>
            <nav class="admin-nav">
                <a routerLink="/">Home</a> | 
                <a routerLink="/dashboard">Dashboard</a> | 
                <a routerLink="/employees">Employees</a> |  
                <a routerLink="/clients">Clients</a> | 
                <a routerLink="/forms">Forms</a> | more
            </nav>
            <router-outlet></router-outlet>

        `

        
    ,
})
export class AdminComponent {
    title: string = 'Nich Admin';
}
