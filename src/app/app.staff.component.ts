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
            "first": "Fred",
            "last": "Frankenstan",
            "role": "Sales",
            "bio": "Lorem ipsum dolor sit amet, movet complectitur usu cu, sed ex exerci blandit. Et sea clita noster discere, aeque delectus verterem ad eos."
        },
        {
            "id": 1,
            "first": "Steve",
            "last": "Stuvy",
            "role": "Developer",
            "bio": "Has equidem splendide at, id cum copiosae prodesset. Animal inermis oportere no vim, at perpetua voluptatum dissentias sea. Putent omittantur instructior ad cum."
        },
        {
            "id": 2,
            "first": "Gary",
            "last": "Grandlefuss",
            "role": "Artist",
            "bio": "Audire feugait ut nam, labore eligendi mel ne, sumo numquam sed eu. Dicant appetere adipiscing ne vel, ad vix torquatos philosophia."
        }
    ]
  };
}
