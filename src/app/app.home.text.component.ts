import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, keyframes, transition } 
    from '@angular/animations';

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
    
    current1: string = 'Person';
    current2: string = 'Help';
    
    wordsArray: any = [
        [
            'contractor0', [
                'sales0', 
                'downloads0', 
                'leads0' 
        ]],
        [
            'contractor1', [
                'sales1', 
                'downloads1', 
                'leads1' 
        ]],
        [
            'contractor2', [
                'sales2', 
                'downloads2', 
                'leads2' 
        ]],
        [
            'contractor3', [
                'sales3', 
                'downloads3', 
                'leads3' 
        ]]

    ];

    ngOnInit() {
        this.wordScroll();
    }

    wordScroll() {
        for (let i = 0; i < this.wordsArray.length; i = i + 1) {
            this.current1 = this.wordsArray[i][0];
            
            for (let j = 0; j < this.wordsArray[i][1].length; j = j + 1) {
                this.current2 = this.wordsArray[i][1][j];
            }
        }
    };
}