


import {Component, OnInit} from '@angular/core';
import {ICustomer, CustomersService, Customer} from '../../service/customers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'wfm-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer: ICustomer = new Customer();
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit() {
    this.route.params.
    subscribe(
      (params: Params) => {
        this.id = params['id'];

        this.customersService
          .getCustomer(this.id)
          .subscribe( (c: ICustomer) => {
            this.customer = c;
          });
      }
    );
  }

  updateCustomer() {
    this.customersService
      .updateCustomer(this.customer)
      .subscribe( () => {
        this.router.navigate(['customers']);
      });
  }
}
