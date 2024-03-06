class BankAccount{
  constructor(
    public customerName="not set", 
    public accountType="savings",
    public accountBalance=0,
    public customerId=0, 
    public accountNumber=0)
    {
        // logic
    }   
  depositMoney(amount=0):number{
    this.accountBalance=this.accountBalance+amount;
    return this.accountBalance;
  }
  withdrawMoney(amount=0):number{
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

let account3=new BankAccount("Deepika","current",45000, 666); // p c
console.log("account3", account3);


let account4=new BankAccount("Deepa","savings",45000); // p c
console.log("account4", account4);


let account5=new BankAccount("Mohan"); // p c
console.log("account5", account5);

let account6=new BankAccount(); // p c
console.log("account6", account6);

account1.depositMoney();
account1.withdrawMoney();
// ? used to  represent optional parameter for methods