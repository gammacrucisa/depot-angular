import { Component } from '@angular/core';
import { trigger, animate, style, keyframes} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './app.home.component.html',
    styleUrls: ['../assets/css/style.css'],
    animations: [
        trigger('aboutFade', [
            animate("5s", keyframes([
              style({ backgroundColor: "red", offset: 0 }),
              style({ backgroundColor: "blue", offset: 0.2 }),
              style({ backgroundColor: "orange", offset: 0.3 }),
              style({ backgroundColor: "black", offset: 1 })
            ]))
        ])
    ]
})
export class HomeComponent {
    words: {
        'contractor0': {
            'sales':'sales0','downloads': 'downloads0','leads': 'leads0' },
        'contractor1':{
            'sales':'sales1','downloads': 'downloads1','leads': 'leads1' },
        'contractor2':{
            'sales':'sales2','downloads': 'downloads2','leads': 'leads2' }
    };

    foobar() {
        for (let key in this.words){
            console.log(key);
            for (let subkey in this.words[key]){
                console.log(this.words[key][subkey]);
            }//for

        }//for
    }
}
