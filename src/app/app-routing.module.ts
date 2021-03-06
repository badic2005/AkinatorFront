
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {LoginComponent} from './auth/login/login.component';
import {AddCustomerComponent} from './customers/add-customer/add-customer.component';
import {HomeComponent} from './home/home.component';
import {CustomerComponent} from './customers/customer/customer.component';
import {EditCustomerComponent} from './customers/edit-customer/edit-customer.component';

const routes: Routes = [

  {path: 'customers/add', component: AddCustomerComponent, pathMatch: 'full' },
  {path: 'customers/:id', component: CustomerComponent, pathMatch: 'full'  },
  {path: 'customers/:id/edit', component: EditCustomerComponent, pathMatch: 'full'  },
  {path: 'customers', component: CustomersComponent, pathMatch: 'full'  },
  {path: '', component:  HomeComponent},
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
