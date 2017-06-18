import { Injectable } from '@angular/core';

import { Client } from './client';
import { CLIENTS } from './mock-clients';

@Injectable()
export class ClientService {
    getClients(): Promise<Client[]> {
        return Promise.resolve(CLIENTS);
    };

    getClientsSlowly(): Promise<Client[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getClients()), 2500);
        });
    }

    getClient(id: number): Promise<Client> {
        return this.getClients()
             .then(clients => clients.find(client => client.id === id));
    }
}
