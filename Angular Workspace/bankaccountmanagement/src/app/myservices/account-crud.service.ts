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
    /** post => address, data   data is sent safely via request body*/
      return this.http.post(this.serveraddress,account); // backend request
  }
  getAllAccounts(){
    return this.http.get(this.serveraddress);  // backend request
  }

  deleteAccountByAccNum(accountNumber:number){
    //id is attached in url
    this.http.delete(this.serveraddress+"/"+accountNumber);
  }
}
