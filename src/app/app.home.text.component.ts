import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, keyframes, transition, state } 
    from '@angular/animations';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-home-text',
    templateUrl: './app.home.text.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
/*        trigger('wordSlide', [
            transition('start <=> finish', animate('2000ms ease', keyframes([
                style({
                    background: "url(assets/images/clientTypeTest23.png) 0px 0px",
                    offset: 0,
                }),
                style({
                    background: "url(assets/images/clientTypeTest23.png) -168px 0px",
                    offset: 0.5,
                }),
                style({
                    background: "url(assets/images/clientTypeTest23.png) -336px 0px",
                    offset: 1,
                }),
            ]))),*/
            
        trigger('wordSlide', [
            state('first', style({
                background: 'url(assets/images/clientTypeTest23.png) 0px 0px',
            })),
            state('second', style({
                background: 'url(assets/images/clientTypeTest23.png) -168px 0px',
            })),
            state('third', style({
                background: 'url(assets/images/clientTypeTest23.png) -336px 0px',
            })),
            transition('first => second', animate(2000)),
            transition('second => third', animate(2000)),
            transition('third => first', animate(2000)),
        ]),
/*            
            transition('start <=> finish', [
                animate(1000, keyframes([
                    style({
                        opacity: 1,
                        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
                        animationTimingFunction: 'cubic-bezier(0.550, 0.055, 0.675, 0.190)',
                        offset: 0.4
                    }),
                    style({
                        opacity: 0,
                        transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)',
                        transformOrigin: 'center bottom',
                        animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.320, 1)',
                        offset: 1
                    })
                ]))
            ])*/
            
//            transition('finish => start', animate('4000ms ease')),
        ]
    
})
export class HomeTextComponent implements OnInit {
    
    wordSlideState: string = 'first';
    time: number = Math.random() * 1000;

    ngOnInit() {
        //this.changeState();
        setInterval(() => {
            this.changeWordSlideState();
        }, 3000); 
    }
    
    changeWordSlideState() {
//        this.wordSlideState = (this.wordSlideState === 'start') ? 'finish' : 'start' ;
        switch(this.wordSlideState) {
               case ('first'): {
                   this.wordSlideState = 'second';
                   break;
               }
               case ('second'): {
                   this.wordSlideState = 'third';
                   break;
               }
               case ('third'): {
                   this.wordSlideState = 'first';
                   break;
               }
                
               
        }
    }

}