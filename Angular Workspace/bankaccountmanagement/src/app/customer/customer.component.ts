import { Component } from '@angular/core';
import { Customer } from '../classes/customer';
import { ActivatedRoute } from '@angular/router'; //1.

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customers:Customer[];
  param:any;
  customerId=0;
  constructor(public routeService:ActivatedRoute) // service object automatically injected in constructor of component: DI
  {
    this.customers=[
      new Customer(666,"poonam Shah", 9090909090, "poonam@gmail.com"),
      new Customer(555,"SaMeer pujari", 8989898989, "pujari@gmail.com"),
      new Customer(787,"Radhika magar", 7777777777, "radha@gmail.com"),
      new Customer(898,"Amar purohit", 7878787878, "amar@gmail.com"),
      new Customer(121,"SaNdesh Mane", 9898989898, "smane@gmail.com"),
      new Customer(111,"SaNdesh Kane", 9999999999, "skane@gmail.com"),
    ]
    this.extractRouteParameter();
  }
  extractRouteParameter(){
      this.param=this.routeService.snapshot.params['custId'];
      this.customerId=parseInt(this.param);
      //console.log(this.customerId);
     // this.findCustomer();
  }

  findCustomer(){
    this.customers.find(customer=>customer.customerId==this.customerId);
  }
}
