import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }   from './landing.component';
import { AdminComponent }   from './admin.component';
import { DashboardComponent }   from './dashboard.component';
import { ClientsComponent }   from './clients.component';
import { FormsComponent }   from './forms.component';
import { EmployeesComponent }      from './employees.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { ClientDetailComponent }  from './client-detail.component';
import { FormDetailComponent }  from './form-detail.component';

const routes: Routes = [
/*            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },*/
            {
                path: '',
                component: LandingComponent,
                pathMatch: 'full',
            },
            {
                path: 'admin',
                component: AdminComponent,
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                pathMatch: 'full',
            },
            {
                path: 'landing',
                component: LandingComponent
            },
            {
                path: 'employees',
                component: EmployeesComponent
            },
            {
                path: 'clients',
                component: ClientsComponent
            },            
            {
                path: 'forms',
                component: FormsComponent
            },
            {
                path: 'employeedetail/:id',
                component: EmployeeDetailComponent
            },
            {
                path: 'clientdetail/:id',
                component: ClientDetailComponent
            },
            {
                path: 'formdetail/:id',
                component: FormDetailComponent
            },
//            { path: '**', component: PageNotFoundComponent }
        ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

