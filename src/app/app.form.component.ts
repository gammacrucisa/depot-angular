import { Component, Input } from '@angular/core';
import { trigger, animate, style, keyframes } from '@angular/animations';

@Component({
    selector: 'app-form',
    templateUrl: './app.form.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('NONE', [
            animate("6s", keyframes([
              style({ backgroundColor: "rgba(0, 0, 0, 0)", offset: 0 }),
              style({ backgroundColor: "rgba(0, 0, 0, 1)", offset: 1 })
            ]))
        ])
    ]
})
export class FormComponent {
    state: string;
}
