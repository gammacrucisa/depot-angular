import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class NavBarComponent {
  title = 'NavBar'; // Not being used

  active() {
    return (true);
  }
}
