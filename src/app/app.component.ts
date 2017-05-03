import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/style.css'],
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
