import { Component } from '@angular/core';
import { Staff, StaffService } from './app.staff.service';
import { trigger, state, style, transition, keyframes, animate } from '@angular/animations';

@Component({
    selector: 'app-staff',
    templateUrl: './app.staff.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('sectionBorder', [
            state('inactive', style({
                borderTop: "1px solid rgba(255, 255, 255, 0.0)",
            })),
            state('active', style({
                borderTop: "1px solid rgba(255, 255, 255, 0.5)",
            })),
            transition('inactive => active', animate('4000ms ease')),
            //transition('active => inactive', animate('4000ms ease')),
        ])
    ]
})


export class StaffComponent {
    
    state: string = 'inactive';

    changeState() {
        this.state = (this.state === 'inactive') ? 'active' : 'inactive';  
    };
    
    staff = [
        {
            "id": 0,
            "first": "Freddy",
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
    ];
}
