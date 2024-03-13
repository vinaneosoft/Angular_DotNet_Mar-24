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
  /**
   * 
   *     this.bankAccounts.push(new BankAccount(23000.78655,"current",'x123',"poonam Shah",666,67676767,new Date('12 March 2000')));
    this.bankAccounts.push(new BankAccount(13000.4563,"savings","x123","SaMeer pujari",555,55555555,new Date('1 March 2000')));
    this.bankAccounts.push(new BankAccount(83000.45,"current","x123","Radhika magar",787,86868686,new Date('12 May 2015')));
    this.bankAccounts.push(new BankAccount(123000,"current","x123","Amar purohit",898,44444444));
    this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Mane",121,78787878,new Date('15 Nov 2020')));
    this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Kane",111,88787878));
   */
}
