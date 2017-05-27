import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, keyframes, transition, state } 
    from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './app.home.component.html',
    styleUrls: ['../assets/css/style.css'],
})
export class HomeComponent implements OnInit {
    state: string = 'start';
    


    ngOnInit() {

    }


}
