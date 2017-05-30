import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } 
    from '@angular/animations';

@Component({
    selector: 'app-faq',
    templateUrl: './app.faq.component.html',
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


export class FaqComponent implements OnInit {
    state: string = 'start';

    faqs = [
        {
            question: 'Quae cum dixisset paulumque institisset, Quid est?',
            answer: 'Si enim ita est, vide ne facinus facias, cum mori suadeas. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sed quanta sit alias, nunc tantum possitne esse tanta. Quid enim de amicitia statueris utilitatis causa expetenda vides.'
        },
        {
            question: 'Quae cum dixisset paulumque institisset, Quid est?',
            answer: 'Si enim ita est, vide ne facinus facias, cum mori suadeas. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sed quanta sit alias, nunc tantum possitne esse tanta. Quid enim de amicitia statueris utilitatis causa expetenda vides.'
        },
        {
            question: 'Quae cum dixisset paulumque institisset, Quid est?',
            answer: 'Si enim ita est, vide ne facinus facias, cum mori suadeas. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sed quanta sit alias, nunc tantum possitne esse tanta. Quid enim de amicitia statueris utilitatis causa expetenda vides.'
        },
        {
            question: 'Quae cum dixisset paulumque institisset, Quid est?',
            answer: 'Si enim ita est, vide ne facinus facias, cum mori suadeas. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sed quanta sit alias, nunc tantum possitne esse tanta. Quid enim de amicitia statueris utilitatis causa expetenda vides.'
        },
        {
            question: 'Quae cum dixisset paulumque institisset, Quid est?',
            answer: 'Si enim ita est, vide ne facinus facias, cum mori suadeas. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sed quanta sit alias, nunc tantum possitne esse tanta. Quid enim de amicitia statueris utilitatis causa expetenda vides.'
        },
        {
            question: 'Quae cum dixisset paulumque institisset, Quid est?',
            answer: 'Si enim ita est, vide ne facinus facias, cum mori suadeas. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sed quanta sit alias, nunc tantum possitne esse tanta. Quid enim de amicitia statueris utilitatis causa expetenda vides.'
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
