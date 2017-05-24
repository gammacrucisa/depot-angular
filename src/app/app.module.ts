import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        BrowserAnimationsModule
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
        InfoComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
