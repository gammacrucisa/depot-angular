import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, keyframes, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './app.home.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('formFade', [
            transition('void => *', [
                animate("6s", keyframes([
                    style({ opacity: 0 }),
                    style({ opacity: 1 }),
                ]))
            ])
            
        ])
    ]
})
export class HomeComponent implements OnInit {
    state: string = 'start';
    
    words: {
        'contractor0': {
            'sales':'sales0','downloads': 'downloads0','leads': 'leads0' },
        'contractor1':{
            'sales':'sales1','downloads': 'downloads1','leads': 'leads1' },
        'contractor2':{
            'sales':'sales2','downloads': 'downloads2','leads': 'leads2' }
    };

    ngOnInit() {
        this.changeState();
    }

    foobar() {
        for (let key in this.words){
            console.log(key);
            for (let subkey in this.words[key]){
                console.log(this.words[key][subkey]);
            }//for

        }//for
    }
    
    changeState() {
        this.state = (this.state === 'start') ? 'finish' : 'start';
    }
}
