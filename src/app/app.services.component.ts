import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } from '@angular/animations';

@Component({
    selector: 'app-services',
    templateUrl: './app.services.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('aboutFade', [
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


export class ServicesComponent implements OnInit {
    state: string = 'start';

    images = [
      {
        img: '../assets/images/imac.png',
        caption: 'KNH Yaki'
      },
      {
        img: '../assets/images/imac2.png',
        caption: '5000 trillion dollars'
      }
    ];

    ngOnInit() {
        //setTimeout(() => this.changeState(), 6000);
        console.log('hola');
    }

    changeState() {
        console.log('hellllo');
        this.state = (this.state === 'start') ? 'finish' : 'start';
    }
}
