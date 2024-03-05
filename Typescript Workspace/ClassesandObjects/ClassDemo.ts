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

let display=()=>{
    console.log("account1:", account1);
    console.log("account2:", account2);
}

let account1:BankAccount;       
account1=new BankAccount(); // calling consturctor
const account2=new BankAccount();
display();
console.log(account1.accountNumber);
account1.accountBalance=1000;
account1.accountNumber=90909090
account1.accountType="savings"
account1.customerId=999
account1.customerName="Amar";

console.log(account2.accountNumber);
account2.accountBalance=2000;
account2.accountNumber=80808080
account2.accountType="savings"
account2.customerId=888
account2.customerName="pramod";
display();
console.log("balance of account1"+account1.accountBalance);
console.log("change type of account2 from savings to salary");
account2.accountType="salary";  // account1 change? no
display();
// display customer name of account
console.log("Customer of account1 is "+account1.customerName); // concatenation
// javascript expressions
console.log(`Customer of account1 is ${account1.customerName} and customer id ${account1.customerId}`);

console.log("after deposit in account1: "+account1.depositMoney(45000));
account2.depositMoney(23000);
console.log("after deposit in account2: "+account2.accountBalance);


// call withdraw and display balance for both accounts




//account2=new BankAccount(); // const reference can not be used to refer another object