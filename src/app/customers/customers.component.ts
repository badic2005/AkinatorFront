



import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomersService} from '../service/customers.service';
import {Subscription} from 'rxjs/index';
import {current} from 'codelyzer/util/syntaxKind';
import {Customer} from '../shared/customer.model';

@Component({
  selector: 'wfm-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  filter: string;
  searchCustomer  = '';
  currentCustomer: Customer = new Customer();
  sub: Subscription;

  customers: Customer[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private customersService: CustomersService
  ) { }

  ngOnInit(): void {

    // this.route
    //   .queryParams
    //   .subscribe(params => {
    //     // Defaults to 0 if no query param provided.
    //     this.currentCustomer = params['customer'];
    //     this.updateCustomerList();
    //   });

    this.updateCustomerList();

  }

  updateCurrentCustomer(c: Customer) {
    this.currentCustomer = c;
  }

  isSelected(id: string): boolean {
    return (this.currentCustomer.id === id) ? true : false;
  }

  updateCustomerList() {
    this.customersService
      .getCustomers()
      .subscribe((customers: Customer[]) => {
        this.customers = customers.filter(x => x.name !== null);
      });
    this.currentCustomer = new Customer();
  }

  ngOnDestroy(): void {
    // sub.unsubscribe();
  }

  // addCustomer() {
  //   this.router.navigate(['add'],{ relativeTo: this.route });
  // }
}
