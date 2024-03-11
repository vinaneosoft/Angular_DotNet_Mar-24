import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankAccount } from '../classes/bank-account';


@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {
   spaceIndex=0;

  @Input()// data in customerAccount is input from parent
  customerAccount:BankAccount=new BankAccount();

  accountHeading="ACCOUNT DETAILS" // this heading to be passed to parent from child

  testArray=["this page is copyright by", "Vina Patil"];
  @Output()
  eventEmitter=new EventEmitter<string>(); //1.

  @Output()
  eventEmitter2=new EventEmitter<string[]>();

  constructor(){
  
    // put emit logic here and test
  }
  ngOnInit(){
   // console.log("in init method of Account Card Component");
    this.eventEmitter.emit(this.accountHeading); //2. // via event we are passing data to direct parent
    this.eventEmitter2.emit(this.testArray);

  
    this.spaceIndex=this.customerAccount.customerName.indexOf(" ");
   // console.log(this.spaceIndex);
  }
}
/** IN CHILD ts file
 *  delclare the data at child to be shared with parent
 * 1. create EventEmitter object
 * 2. emit the event and pass the data to parent
 * 
 * IN CHILD SELECTOR <> html template
 * 3. bind EventEmitter object and pass $event to parent variable 
 * 
 * PARENT TEMPLATE html template
 * 4. bind the data to parent template
 */