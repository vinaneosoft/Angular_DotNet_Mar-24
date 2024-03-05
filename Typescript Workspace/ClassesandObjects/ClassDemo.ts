// capital case

class BankAccount{
  // instance variables : state
  // camel case , noun
    // do not use var, let, const
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
let account1:BankAccount;       
account1=new BankAccount(); // calling consturctor
const account2=new BankAccount();
console.log("account1:");
console.log(account1);
console.log(account1.accountNumber);
console.log("account2:");
console.log(account2);
console.log(account2.accountNumber);

