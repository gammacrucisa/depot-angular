import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template:
        `
            <app-landing></app-landing>
        `
    ,
    styleUrls: ['../assets/css/style.css'],
})


export class AppComponent {
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

}
