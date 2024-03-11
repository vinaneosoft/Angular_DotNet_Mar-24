import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {

   bankAccounts=new Array<BankAccount>();

   heading="";
   array:string[]=[]
  // we r going to manage all bank accounts here
  constructor(){
    this.createAccount();  }
  createAccount(){
    this.bankAccounts.push(new BankAccount(23000,"current","poonam Shah",666,67676767,new Date('12 March 2000')));
    this.bankAccounts.push(new BankAccount(13000,"savings","SaMeer pujari",555,55555555,new Date('1 March 2000')));
    this.bankAccounts.push(new BankAccount(83000,"current","Radhika magar",787,86868686,new Date('12 May 2015')));
    this.bankAccounts.push(new BankAccount(123000,"current","Amar purohit",898,44444444));
    this.bankAccounts.push(new BankAccount(235000,"salary","SaNdesh Mane",121,78787878,new Date('15 Feb 2020')));
  }


}
