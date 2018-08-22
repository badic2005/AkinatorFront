///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'wfm-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnChanges {

  @Input('client') customer;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('ngOnInit_customer');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes_customer');
  }

  openCustomer() {
    //this.router.navigateByUrl("/");
    this.customer = {};
  }
}
