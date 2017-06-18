import { Component } from '@angular/core';
import { Staff, StaffService } from './app.staff.service';
import { trigger, state, style, transition, keyframes, animate } 
    from '@angular/animations';

@Component({
    selector: 'app-staff',
    templateUrl: './app.staff.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('state', [
            state('fadeOut', style({
                opacity: 1,
            })),
            state('fadeIn', style({
                opacity: 1,
            })),
            transition('fadeOut <=> fadeIn', animate('250ms ease', style({
                opacity: 0,
                transform: 'rotateY( 180deg )',                
            }))),
            //transition('active => inactive', animate('4000ms ease')),
        ])
    ]
})


export class StaffComponent {
    state: string = 'none';

    flip() {
        console.log(0);
        this.state = ( this.state === 'none' ) ? 'fadeOut' : 'front';
    }
    
    staff = [
        {
            id: 0,
            visible: true,
            first: 'Freddy',
            last: 'Freeze',
            role: 'Sales',
            bio: 'Lorem ipsum dolor sit amet, movet complectitur usu cu, sed ex exerci blandit. Et sea clita noster discere, aeque delectus verterem ad eos.',
            imageFront: '../assets/images/rotating_card_profile.png'
        },
        {
            'id': 1,
            visible: true,
            'first': 'Steve',
            'last': 'Stuvy',
            'role': 'Developer',
            'bio': 'Has equidem splendide at, id cum copiosae prodesset. Animal inermis oportere no vim, at perpetua voluptatum dissentias sea.',
            imageFront: '../assets/images/rotating_card_profile2.png'
        },
        {
            'id': 2,
            visible: true,
            'first': 'Gary',
            'last': 'Goodyear',
            'role': 'Artist',
            'bio': 'Audire feugait ut nam, labore eligendi mel ne, sumo numquam sed eu. Dicant appetere adipiscing ne vel, ad vix torquatos philosophia.',
            imageFront: '../assets/images/rotating_card_profile3.png'
        }
    ];
}
