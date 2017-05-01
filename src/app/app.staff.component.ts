import { Component, OnInit } from '@angular/core';
import { Staff, StaffService } from './app.staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './app.staff.component.html',
  styleUrls: ['../assets/css/style.css']
})


export class StaffComponent implements OnInit {
  private staff: Staff[];

  constructor(private staffService: StaffService) {}

  ngOnInit() { 
    this.staff = [
        {
            "id": 0,
            "first": "Patrick",
            "last": "W",
            "role": "Developer",
            "bio": "In there like swimwear."
        },
        {
            "id": 1,
            "first": "Steve",
            "last": "A",
            "role": "Developer",
            "bio": "Never fear."
        },
        {
            "id": 2,
            "first": "Gary",
            "last": "P",
            "role": "Artist",
            "bio": "Make it a great day."
        }
]
  };

  refreshStaff() {
    this.staffService.discoverStaff().subscribe(data => { this.staff = data; });
  }
}
