import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {
   bankAccounts=new Array<BankAccount>();
    showForm=false;
   heading="";
   array:string[]=[];
   accountForm:FormGroup;
   
  constructor(){
    this.createAccount();  
    this.accountForm=new FormGroup({
      accountType:new FormControl("savings"),
      accountBalance:new FormControl(""),
      customerName:new FormControl(),
      customerId:new FormControl(),
      id:new FormControl()
    });
  }
  createAccount(){
    this.bankAccounts.push(new BankAccount(23000.78655,"current","poonam Shah",666,67676767,new Date('12 March 2000')));
    this.bankAccounts.push(new BankAccount(13000.4563,"savings","SaMeer pujari",555,55555555,new Date('1 March 2000')));
    this.bankAccounts.push(new BankAccount(83000.45,"current","Radhika magar",787,86868686,new Date('12 May 2015')));
    this.bankAccounts.push(new BankAccount(123000,"current","Amar purohit",898,44444444));
    this.bankAccounts.push(new BankAccount(1235000.123,"salary","SaNdesh Mane",121,78787878,new Date('15 Nov 2020')));
    this.bankAccounts.push(new BankAccount(1235000.123,"salary","SaNdesh Kane",111,88787878));
  }
  setDetails(){
    /* console.log(this.accountForm); */
    console.log(this.accountForm.value);
  }

}
