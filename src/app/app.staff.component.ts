import { Component, Input, OnInit } from '@angular/core';

interface Staff {
    id: number;
    first: string;
    last: string;
    role: string;
    bio: string;
};

@Component({
  selector: 'app-staff',
  templateUrl: './app.staff.component.html',
  styleUrls: ['../assets/css/style.css']
})


export class StaffComponent {
  title = 'Staff';
  private staff: Staff[];

  ngOnInit() {
    this.staff = [
        {
            id: 0,
            first: 'Patrick',
            last: 'W',
            role: 'Developer',
            bio: 'In there like swimwear.'
        },
        {
            id: 1,
            first: 'Steve',
            last: 'A',
            role: 'Developer',
            bio: 'Never fear.'
        },
        {
            id: 2,
            first: 'Gary',
            last: 'P',
            role: 'Artist',
            bio: 'Make it a great day.'
        }
    ];
  };
}
