



import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomer, CustomersService} from '../service/customers.service';

@Component({
  selector: 'wfm-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  filter: string;
  searchCustomer  = '';

  customers: ICustomer[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private customersService: CustomersService
  ) { }

  ngOnInit(): void {

    this.customersService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => {
      this.customers = customers.filter(x => x.name !== null);
    });

  }

  // addCustomer() {
  //   this.router.navigate(['add'],{ relativeTo: this.route });
  // }
}
