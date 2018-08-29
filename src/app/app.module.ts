import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CustomersComponent} from './customers/customers.component';
import {CustomerComponent} from './customers/customer/customer.component';
import {AddCustomerComponent} from './customers/add-customer/add-customer.component';
import {LoginComponent} from './auth/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CustomersFilterPipe} from './customers/customers-filter.pipe';
import {CustomersService} from './service/customers.service';
import { HomeComponent } from './home/home.component';
import {EditCustomerComponent} from './customers/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    AddCustomerComponent,
    LoginComponent,
    CustomersFilterPipe,
    HomeComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
    // SystemModule
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
