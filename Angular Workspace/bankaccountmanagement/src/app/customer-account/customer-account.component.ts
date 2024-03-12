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
   passwordPattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}";
  constructor(){
    this.createAccount();  
    this.accountForm=new FormGroup({
      accountType:new FormControl("savings"),
      accountBalance:new FormControl("", [Validators.required, Validators.min(0)]), //1.
      customerName:new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(2)]),
      customerId:new FormControl("",[Validators.required]),
      id:new FormControl(""),
      password:new FormControl("",[Validators.required, Validators.pattern(this.passwordPattern)]),
      confirmPassword:new FormControl("")
    });
  }
  createAccount(){
    this.bankAccounts.push(new BankAccount(23000.78655,"current",'x123',"poonam Shah",666,67676767,new Date('12 March 2000')));
    this.bankAccounts.push(new BankAccount(13000.4563,"savings","x123","SaMeer pujari",555,55555555,new Date('1 March 2000')));
    this.bankAccounts.push(new BankAccount(83000.45,"current","x123","Radhika magar",787,86868686,new Date('12 May 2015')));
    this.bankAccounts.push(new BankAccount(123000,"current","x123","Amar purohit",898,44444444));
    this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Mane",121,78787878,new Date('15 Nov 2020')));
    this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Kane",111,88787878));
  }
  setDetails(){
    /* console.log(this.accountForm); */
    console.log(this.accountForm.value);
  }
  get balance(){
    return this.accountForm.get('accountBalance');  //2
  }
  get custname(){
    return this.accountForm.get('customerName'); 
  }
  get custid(){
    return this.accountForm.get('customerId'); 
  }
  get accnum(){
    return this.accountForm.get('id'); 
  }
  get pass(){
    return this.accountForm.get('password'); 
  }
}
/**
 * 
 * required:
 *  if field empty
 *    return {required:true}
 * else
 * return null
 * 
 * min
 * 
 *  if min value req fails
 *    return {min :.....}
 * else
 *    return null
 */