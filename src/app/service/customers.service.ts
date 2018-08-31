import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Customer} from '../shared/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  // host = 'http://localhost:8080/';
  host = this.document.location.hostname === 'localhost' ? 'http://localhost:8080' : this.document.location.origin;

  constructor(private http: HttpClient,
              @Inject(DOCUMENT) private document: any) { }


  getCustomers() {
    return this.http.get(`${this.host}/customers`);
  }

  getCustomer(id: string) {
    return this.http.get(`${this.host}/customers/${id}`);
  }

  addCustomer(customer: Customer) {
    return this.http.post(this.host+'/customers', customer);
  }

  updateCustomer(customer: Customer) {
    return this.http.put(this.host+'/customers/'+customer.id, customer);
  }
  deleteCustomer(id: string) {
    return this.http.delete(`${this.host}/customers/${id}`);
  }

}
