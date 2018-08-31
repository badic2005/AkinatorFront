
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Customer} from '../../shared/customer.model';
import {CustomersService} from '../../service/customers.service';

@Component({
  selector: 'wfm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Customer = new Customer();
  @Output() onDeleteCustomer =  new EventEmitter();

  constructor(
              private router: Router,
              private route: ActivatedRoute,
              private customersService: CustomersService) {}

  ngOnInit(): void {
    console.log(this.customer);
    // this.route.params.
    //     subscribe(
    //     (params: Params) => {
    //             this.id = params['id'];
    //
    //             this.customersService
    //               .getCustomer(this.id)
    //               .subscribe( (c: Customer) => {
    //                 this.customer = c;
    //               });
    //           }
    //     );
  }

  deleteCustomer(id: string) {
    this.customersService.deleteCustomer(id)
      .subscribe(x => {
        this.onDeleteCustomer.emit();
      });
  }
}
