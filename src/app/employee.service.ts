import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeService {
    getEmployees(): Promise<Employee[]> {
        return Promise.resolve(EMPLOYEES);
    };

    getEmployeesSlowly(): Promise<Employee[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getEmployees()), 2500);
        });
    }

    getEmployee(id: number): Promise<Employee> {
        return this.getEmployees()
             .then(employees => employees.find(employee => employee.id === id));
}

}
