import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app.footer.component.html',
    styleUrls: ['../assets/css/style.css']
})
export class FooterComponent implements OnInit {
    title: string = 'Footer'; // Not being used.
    supportEmail: string = 'meanpw2@gmail.com';
    supportPhone: string = '323.425.1670';
    currentYear: number = new Date().getFullYear() + 10;

    ngOnInit(): void {
        console.log('hola');
    }
    
    onClick() {
    console.log('clicked');
        alert('naughty...');
    }
}
