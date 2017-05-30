import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } 
    from '@angular/animations';

@Component({
    selector: 'app-associates',
    templateUrl: './app.associates.component.html',
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


export class AssociatesComponent implements OnInit {
    state: string = 'start';

    associates = [
      {
        img: '../assets/images/AARP1-black.png',
        caption: 'KNH Yaki'
      },
      {
        img: '../assets/images/Suzuki1-black.png',
        caption: '5000 trillion dollars'
      },
              {
        img: '../assets/images/Betagig1-black.png',
        caption: 'KNH Yaki'
      },
      {
        img: '../assets/images/Nike1-black.png',
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
