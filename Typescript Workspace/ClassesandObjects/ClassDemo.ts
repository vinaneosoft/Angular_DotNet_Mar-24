// capital case

class BankAccount{
  // instance variables : state
  // camel case , noun
    // do not use var, let, consts
    accountNumber:number
    accountBalance:number
    accountType:string
    customerId:number;
    customerName:string
  // instance method : behavior
  // camel case, verb

  depositMoney(amount:number):number{
    this.accountBalance=this.accountBalance+amount;
    return this.accountBalance;
  }

  withdrawMoney(amount:number):number{
    this.accountBalance=this.accountBalance-amount;
    return this.accountBalance;
  }
}
