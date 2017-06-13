import { Injectable } from '@angular/core';

import { Form } from './form';
import { FORMS } from './mock-forms';

@Injectable()
export class FormService {
    getForms(): Promise<Form[]> {
        return Promise.resolve(FORMS);
    };

    getFormsSlowly(): Promise<Form[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getForms()), 2500);
        });
    }

    getForm(id: number): Promise<Form> {
        return this.getForms()
             .then(forms => forms.find(form => form.id === id));
}

}
