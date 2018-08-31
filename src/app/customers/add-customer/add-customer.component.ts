///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Params, Router} from '@angular/router';
import {CustomersService} from '../../service/customers.service';
import {Customer} from '../../shared/customer.model';

@Component({
  selector: 'wfm-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();
  id: string;

  constructor(private router: Router,
              private customersService: CustomersService) { }

  ngOnInit() {
  }

  addCustomer() {
    this.customersService
      .addCustomer(this.customer)
      .subscribe( (customer: Customer) => {
        this.router.navigate(['customers']);
      });
  }

}
