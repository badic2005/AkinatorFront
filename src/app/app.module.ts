import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './system/customers/customers.component';
import {CustomerComponent} from './system/customer/customer.component';
import {AddCustomerComponent} from './system/add-customer/add-customer.component';
import {LoginComponent} from './auth/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomersFilterPipe} from './system/customers/customers-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    AddCustomerComponent,
    LoginComponent,
    CustomersFilterPipe
    // AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
    // SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
