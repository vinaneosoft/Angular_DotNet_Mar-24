import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../classes/bank-account';

@Injectable({
  providedIn: 'root'
})
export class AccountCRUDService {

  serveraddress="http://localhost:3000/accounts";
  constructor(private http:HttpClient) 
  { }

  addAccount(account:BankAccount){
      return this.http.post(this.serveraddress,account); // backend request
  }
}
