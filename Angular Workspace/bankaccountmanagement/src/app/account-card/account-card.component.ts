import { Component, Input } from '@angular/core';
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
}
