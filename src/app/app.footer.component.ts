import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class FooterComponent {
  title = 'Footer'; // Not being used.
  supportEmail = 'support@nich.com';
  supportPhone = '424.278.0977';
  currentYear = new Date().getFullYear() + 10;

  onClick() {
    console.log('clicked');
  }
}
