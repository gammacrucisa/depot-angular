import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } 
    from '@angular/animations';

@Component({
    selector: 'app-services',
    templateUrl: './app.services.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('#', [
            state('start', style({
                backgroundColor: "rgba(0, 0, 0, 0)",
            })),
            state('finish', style({
                backgroundColor: "rgba(0, 0, 0, 0.1)",
            })),
            transition('start => finish', animate('4000ms ease')),
            transition('finish => start', animate('4000ms ease')),
        ])
    ]
})


export class ServicesComponent implements OnInit {
    state: string = 'start';

    services = [
        {
            icon: '../assets/images/ic_equalizer_black_48px.svg',
            caption: 'Paid Search Marketing'
        },
        {
            icon: '../assets/images/ic_thumb_up_black_48px.svg',
            caption: 'Facebook & Social Advertising'
        },
        {
            icon: '../assets/images/ic_web_black_48px.svg',
            caption: 'Web Development'
        },
        {
            icon: '../assets/images/ic_trending_up_black_48px.svg',
            caption: 'Search Engine Optimization'
        },
        {
            icon: '../assets/images/ic_wc_black_48px.svg',
            caption: 'Branding & Content Development'
        },
    
    ];

    ngOnInit() {
        //setTimeout(() => this.changeState(), 6000);
        console.log('hola');
    }

    changeState() {
        console.log('hellllo');
        this.state = (this.state === 'start') ? 'finish' : 'start';
    }
}
