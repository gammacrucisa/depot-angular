import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, keyframes, transition } from '@angular/animations';

@Component({
    selector: 'app-home-text',
    templateUrl: './app.home.text.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('textSlide', [
            transition('void => *', [
                animate("6s", keyframes([
                    style({ opacity: 0 }),
                    style({ opacity: 1 }),
                ]))
            ])
            
        ])
    ]
})
export class HomeTextComponent implements OnInit {
    
    text: string = 'start';

    wordsArray: any = [
        {
            'contractor0': {
                'sales': 'sales0', 
                'downloads': 'downloads0', 
                'leads': 'leads0' 
        }},
        {
            'contractor1': {
                'sales': 'sales1', 
                'downloads': 'downloads1', 
                'leads': 'leads1' 
        }},
        {
            'contractor2': {
                'sales': 'sales2', 
                'downloads': 'downloads2', 
                'leads': 'leads2' 
        }},
        {
            'contractor3': {
                'sales': 'sales3', 
                'downloads': 'downloads3', 
                'leads': 'leads3' 
        }}

    ];
    
    words = {
        'contractor0': {
            'sales': 'sales0', 
            'downloads': 'downloads0', 
            'leads': 'leads0' 
        },
        'contractor1': {
            'sales': 'sales1', 
            'downloads': 'downloads1', 
            'leads': 'leads1' 
        },
        'contractor2': {
            'sales': 'sales2', 
            'downloads': 'downloads2', 
            'leads': 'leads2' 
        },
        'contractor3': {
            'sales': 'sales3', 
            'downloads': 'downloads3', 
            'leads': 'leads3' 
        },
    };
    
    current1: string = 'You';
    current2: string = 'Us';


    ngOnInit() {
        this.foobaz();

//        this.foobar();
    }

    foobaz() {
        for (let i = 0; i < this.wordsArray.length; i = i + 1) {
            
        }
    }

    foobar() { // for iterating a nested dictionary while listing the first dimension properties
        for (let key of Object.keys(this.words)) {
            setInterval(() => {
                this.current1 = key;
            }, 3000);            
            for (let subkey of Object.keys(this.words[key])) {
                setInterval(() => {
                    this.current2 = this.words[key][subkey];
                }, 3000);
            }
        };
    }
}