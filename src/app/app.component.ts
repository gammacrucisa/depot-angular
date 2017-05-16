import { Component, Input } from '@angular/core';
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
    trigger('bgGradient', [
        state('start', style({
            background: "linear-gradient(to right, #a471a2, #006679)"
        })),
        state('finish', style({
            background: "linear-gradient(to right, #a471a2, #006679)"
        })),
        transition('start <=> finish', animate('5000ms ease-in'))
    ])
  ]
})


export class AppComponent {
  title = 'app works!';

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

  @Input() form = {
    id: 1,
    first: 'Patrick',
    last: 'W',
    role: 'Developer'
  };
}
