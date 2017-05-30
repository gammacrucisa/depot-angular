import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class FooterComponent {
  title: string = 'Footer'; // Not being used.
  supportEmail: string = 'pwcse1@gmail.com';
  supportPhone: string = '323.425.1670';
  currentYear: number = new Date().getFullYear() + 10;

  onClick() {
    console.log('clicked');
  }
}
