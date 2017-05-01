import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app.form.component.html',
  styleUrls: ['../assets/css/style.css']
})
export class FormComponent {
  title = 'Form'; // Not being used.

  @Input() fullName;

  setFullName() {

  }
}
