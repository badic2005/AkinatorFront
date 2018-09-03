import {Component, OnInit} from '@angular/core';
import {CustomersService} from '../../service/customers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Customer} from '../../shared/customer.model';

@Component({
  selector: 'wfm-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer = new Customer();
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
          .subscribe( (c: Customer) => {
            this.customer = c;
          });
      }
    );
  }

  updateCustomer() {
    this.customersService
      .updateCustomer(this.customer)
      .subscribe( () => {
        this.router.navigate(['customers'] );
      });
  }
}
