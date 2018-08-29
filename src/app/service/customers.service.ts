import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

export interface ICustomer {
  id: string;
  name: string;
  inn: string;
}

export class Customer implements ICustomer {
  id = '';
  name = '';
  inn = '';

  constructor() {}
}

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  // host = 'http://localhost:8080/';
  host = this.document.location.hostname === 'localhost' ? 'http://localhost:8080/' : this.document.location.origin;

  constructor(private http: HttpClient,
              @Inject(DOCUMENT) private document: any) { }


  getCustomers() {
    return this.http.get(`${this.host}/customers`);
  }

  getCustomer(id: string) {
    return this.http.get(`${this.host}/customers/${id}`);
  }

  addCustomer(customer: ICustomer) {
    return this.http.post(this.host+'/customers', customer);
  }

  updateCustomer(customer: ICustomer) {
    return this.http.put(this.host+'/customers/'+customer.id, customer);
  }
  deleteCustomer(id: string) {
    return this.http.delete(`${this.host}/customers/${id}`);
  }

}
