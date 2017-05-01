import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/style.css'],
})


export class AppComponent {
  title = 'app works!';

  @Input() form = {
    id: 1,
    first: 'Patrick',
    last: 'W',
    role: 'Developer'
  };
}
