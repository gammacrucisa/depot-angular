import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Rx';

export interface Staff {
    id: number;
    first: string;
    last: string;
    role: string;
    bio: string;
};

@Injectable()
export class StaffService {

    constructor (private http: Http) {}

    discoverStaff() {
        return this.http.get('../assets/data/staff.json').map(res => res.json());
    }
}
