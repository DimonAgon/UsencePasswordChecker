import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PasswordFormComponent} from "./password-form/password-form.component";
import { IndicatorComponent } from './indicator/indicator.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordControlComponent } from './password-control/password-control.component';
import {StripeComponent} from "./stripe/stripe.component";

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    IndicatorComponent,
    PasswordControlComponent,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
