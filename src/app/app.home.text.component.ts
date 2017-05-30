import { Component, AfterViewInit } from '@angular/core';
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
                background: 'url(assets/images/home-words-developer.png) 0px 0px',
                filter: 'blur(0px)',
            })),
            state('second', style({
                background: 'url(assets/images/home-words-artisan.png) 0px 0px',
                filter: 'blur(0px)',
            })),
            state('third', style({
                background: 'url(assets/images/clientTypeTest23.png) -336px 0px',
                filter: 'blur(0px)',
            })),
            state('fourth', style({
                background: 'url(assets/images/clientTypeTest23.png) -336px 0px',
                filter: 'blur(0px)',
            })),
            transition('first => second', animate(0)),
            transition('second => third', animate(0)),
            transition('third => fourth', animate(0)),
            transition('fourth => first', animate(0)),
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
export class HomeTextComponent implements AfterViewInit {
    
    clientSlideState: string = 'first';
    needSlideState: string = 'first';
    time: number = 1000;
    interval: number;

    ngAfterViewInit() {
      //this.changeState();
//      this.time = 3000;
        this.interval = setInterval(() => {
           this.changeClientSlideState();
        }, this.time); 
    }
    
    changeClientSlideState() {
//        this.wordSlideState = (this.wordSlideState === 'start') ? 'finish' : 'start' ;
        switch(this.clientSlideState) {
               case ('first'): {
                   this.clientSlideState = 'second';
                   break;
               }
               case ('second'): {
                   this.clientSlideState = 'third';
                   break;
               }
               case ('third'): {
                   this.clientSlideState = 'fourth';
                   break;
               }
                
               case ('fourth'): {
                   this.clientSlideState = 'first';
                   break;
               }
                
               
        }
    }  
     changeNeedSlideState() {
//        this.wordSlideState = (this.wordSlideState === 'start') ? 'finish' : 'start' ;
        switch(this.needSlideState) {
               case ('first'): {
                   this.needSlideState = 'second';
                   break;
               }
               case ('second'): {
                   this.needSlideState = 'third';
                   break;
               }
               case ('third'): {
                   this.needSlideState = 'fourth';
                   break;
               }
                
               case ('fourth'): {
                   this.needSlideState = 'first';
                   break;
               }
                
               
        }
    }

}