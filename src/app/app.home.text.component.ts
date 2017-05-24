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
    current1: string = 'current1Text';
    current2: string = 'current2Text';
    words: any = {
        'contractor0': {
            'sales': 'sales0', 'downloads': 'downloads0', 'leads': 'leads0' },
        'contractor1': {
            'sales': 'sales1', 'downloads': 'downloads1', 'leads': 'leads1' },
    };

    ngOnInit() {
        console.log(this.words.contractor0.sales);
        for (let key of Object.keys(this.words)) {
            console.log(key);
            for (let subkey of Object.keys(this.words[key])) {
                console.log(this.words[key][subkey]);
            }
        };
//        this.foobar();
    }

    foobar() {
        console.log("0");
        for (let i = 0; i < 3; i++) {
            console.log("2");
        }
        for (let key in this.words) {
            console.log("1");
            console.log(key);
            for (var subkey in this.words[key]){
                console.log(this.words[key][subkey]);
            }//for
        }//for
    }
}