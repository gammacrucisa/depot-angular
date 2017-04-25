import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class FooterComponent {
  title = 'Footer'; // Not being used.
  supportEmail = 'support@intro.com';
  supportPhone = '1.800.345.3949';
  currentYear = new Date().getFullYear() + 10;

  onClick() {
    console.log('clicked');
  }
}
