import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankAccount } from '../classes/bank-account';


@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {
  // account details???

  @Input()// data in customerAccount is input from parent
  customerAccount:BankAccount=new BankAccount();

  accountHeading="ACCOUNT DETAILS" // this heading to be passed to parent from child

  @Output()
  eventEmitter=new EventEmitter<string>(); //1.

  constructor(){
    console.log("in constructor of Account Card Component");
    // logic 
  }
  ngOnInit(){
    console.log("in init method of Account Card Component");
    this.eventEmitter.emit(this.accountHeading); //2. // via event we are passing data to direct parent
  }
}
