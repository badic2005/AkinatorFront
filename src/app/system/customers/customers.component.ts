///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'wfm-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent implements OnInit {

  filter: string;
  searchCustomer  = '';

  customers = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient
  ) { }

  ngOnInit(): void {

    // this.http.get('http://localhost:8080/customers').subscribe((data: any[]) => {
    //   this.customers = data.filter(x => x.name !== null);
    // });
    this.http.get('https://akinatoraqua.herokuapp.com/customers').subscribe((data: any[]) => {
      this.customers = data.filter(x => x.name !== null);
    });
    // this.customers = this.customersService.getCustomers();
  }

  updateCustomersList(car: {name: string, inn: string}) {
       if (this.customers.findIndex(x => x.name === car.name) < 0) {
         this.customers.push(car);
       }

  }

  addCustomer() {
    this.router.navigate(['add'],{ relativeTo: this.route });
  }
}
