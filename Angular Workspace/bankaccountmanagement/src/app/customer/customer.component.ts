import { Component } from '@angular/core';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {


  customers:Customer[];
  constructor(){
    this.customers=[
      new Customer(666,"poonam Shah", 9090909090, "poonam@gmail.com"),
      new Customer(555,"SaMeer pujari", 8989898989, "pujari@gmail.com"),
      new Customer(787,"Radhika magar", 7777777777, "radha@gmail.com"),
      new Customer(898,"Amar purohit", 7878787878, "amar@gmail.com"),
      new Customer(121,"SaNdesh Mane", 9898989898, "smane@gmail.com"),
      new Customer(111,"SaNdesh Kane", 9999999999, "skane@gmail.com"),
    ]
  }
  
}
