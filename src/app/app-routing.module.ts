
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomersComponent} from './system/customers/customers.component';
import {LoginComponent} from './auth/login/login.component';
import {AddCustomerComponent} from './system/add-customer/add-customer.component';

const routes: Routes = [
  {path: 'customers', component: CustomersComponent },
  {path: 'customers/add', component: AddCustomerComponent },
  {path: '', component:  LoginComponent},
];
// const routes: Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'}
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
