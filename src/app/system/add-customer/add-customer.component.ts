///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'wfm-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  name: string;
  inn: string;

  @Output('onAddCustomer') customerEmitter = new EventEmitter<{name: string, inn: string}>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createCustomer() {
      this.customerEmitter.emit({
        name: this.name,
        inn: this.inn
      });
    this.router.navigate(['customers']);
  }

  returnToCustomers() {
    this.router.navigate(['customers']);
  }


}
