import { Component, OnInit, Input } from '@angular/core';
import {Customer} from '../../shared/customer.model';
@Component({
  selector: 'wfm-fields-customer',
  templateUrl: './fields-customer.component.html',
  styleUrls: ['./fields-customer.component.scss']
})
export class FieldsCustomerComponent implements OnInit {

  @Input("currentCustomer") customer: Customer = new Customer();
  id: string;
    
    
    constructor() { }

  ngOnInit() {
  }

}
