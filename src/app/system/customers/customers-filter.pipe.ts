import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customersPipe'
})
export class CustomersFilterPipe implements PipeTransform{

  transform(customerList, searchStr: string) {
    if (customerList.length === 0 || searchStr === '') {
      return customerList;
    }

    return customerList.filter(customer => customer.name === searchStr);
  }

}
