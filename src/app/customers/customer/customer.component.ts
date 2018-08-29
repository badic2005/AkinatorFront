
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ICustomer, CustomersService, Customer} from '../../service/customers.service';

@Component({
  selector: 'wfm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: ICustomer = new Customer();

  id: string;

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private customersService: CustomersService) {}

  ngOnInit(): void {
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

  deleteCustomer(id: string) {
    this.customersService.deleteCustomer(id)
      .subscribe(x => {
        console.log(x);
        this.router.navigate(['customers']);
      });
  }
}
