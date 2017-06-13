import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './app.navbar.component';
import { HomeComponent } from './app.home.component';
import { FooterComponent } from './app.footer.component';
import { FormComponent } from './app.form.component';
import { StaffComponent } from './app.staff.component';
import { HomeTextComponent } from './app.home.text.component';
import { ServicesComponent } from './app.services.component';
import { DeckComponent } from './app.deck.component';
import { AssociatesComponent } from './app.associates.component';
import { FaqComponent } from './app.faq.component';
import { InfoComponent } from './app.info.component';
import { DashboardComponent } from './dashboard.component';
import { EmployeesComponent }  from './employees.component';
import { ClientsComponent }  from './clients.component';
import { FormsComponent }  from './forms.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { ClientDetailComponent }  from './client-detail.component';
import { FormDetailComponent }  from './form-detail.component';
import { EmployeeService }  from './employee.service';
import { ClientService }  from './client.service';
import { FormService }  from './form.service';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule,
        RouterModule.forRoot([
/*            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },*/
            {
                path: '',
                component: AppComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
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
        ]),
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        FooterComponent,
        FormComponent,
        StaffComponent,
        HomeTextComponent,
        ServicesComponent,
        DeckComponent,
        AssociatesComponent,
        FaqComponent,
        InfoComponent,
        DashboardComponent,
        EmployeesComponent,
        ClientsComponent,
        FormsComponent,
        EmployeeDetailComponent,
        ClientDetailComponent,
        FormDetailComponent,
    ],
    providers: [
        EmployeeService,
        ClientService,
        FormService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
