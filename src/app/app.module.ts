import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './app.navbar.component';
import { HomeComponent } from './app.home.component';
import { FooterComponent } from './app.footer.component';
import { FormComponent } from './app.form.component';
import { StaffComponent } from './app.staff.component';
import { StaffService } from './app.staff.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    FormComponent,
    StaffComponent
  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
