import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
        `
            
            <a routerLink=""></a>
            <a routerLink="admin"></a>
            <router-outlet></router-outlet>

        `
    ,
    styleUrls: ['../assets/css/style.css'],
})


export class AppComponent {
    title: string = 'Nich';
}
