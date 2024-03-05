class BankAccount{
    accountNumber:number
    accountBalance:number
    accountType:string
    customerId:number;
    public customerName:string
  constructor(custName:string, accountType:string,balance:number,customerId:number, accNum:number){
      this.customerName=custName;
      this.accountNumber=accNum;
      this.accountBalance=balance;
      this.accountType=accountType;
      this.customerId=customerId;
  }   
  depositMoney(amount:number):number{
    this.accountBalance=this.accountBalance+amount;
    return this.accountBalance;
  }
  withdrawMoney(amount:number):number{
    this.accountBalance=this.accountBalance-amount;
    return this.accountBalance;
  }
  display():void{
      console.log(
       `Account Details are : 
      account number : ${this.accountNumber},
      customer name: ${this.customerName}`);
  }
  
}
let account1=new BankAccount("Kuldeep","savings",56000, 888, 90909090); // p c
console.log("account1", account1);
account1.display(); // behavour

let account2=new BankAccount("Deepak","savings",45000, 777, 77777777); // p c
console.log("account2", account2);
account2.display();


// ? used to  represent optional parameter for methods