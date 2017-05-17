import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/style.css'],
/*     
  background: -webkit-linear-gradient(to right, #a471a2, #006679);
  background: linear-gradient(to right, #a471a2, #006679); 
*/
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


export class AppComponent implements OnInit {
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
        setTimeout(() => this.changeState(), 10);
        console.log('hola');
    }

    changeState() {
        console.log('hellllo');
        this.state = (this.state === 'start') ? 'finish' : 'start';
    }

  @Input() form = {
    id: 1,
    first: 'Patrick',
    last: 'W',
    role: 'Developer'
  };
}
