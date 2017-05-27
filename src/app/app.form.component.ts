import { Component, Input } from '@angular/core';
import { trigger, animate, style, keyframes, transition, state } 
    from '@angular/animations';

@Component({
    selector: 'app-form',
    templateUrl: './app.form.component.html',
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
export class FormComponent {
    state: string;
}
