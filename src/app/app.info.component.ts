import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } 
    from '@angular/animations';

@Component({
    selector: 'app-info',
    templateUrl: './app.info.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('#', [
            state('start', style({
                backgroundColor: "rgba(0, 0, 0, 0)",
            })),
            state('finish', style({
                backgroundColor: "rgba(0, 0, 0, 0.1)",
            })),
            transition('start => finish', animate('4000ms ease')),
            transition('finish => start', animate('4000ms ease')),
        ])
    ]
})


export class InfoComponent implements OnInit {
    state: string = 'start';

    ngOnInit() {

    }
}
