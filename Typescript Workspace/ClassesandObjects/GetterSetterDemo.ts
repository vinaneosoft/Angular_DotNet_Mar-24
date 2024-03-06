class BankAccount{
    constructor(
      private customerName="not set", 
      private accountType="savings",
      private accountBalance=0,
      private customerId=0, 
      private accountNumber=0){}   
      get accNumber(){
        return this.accountNumber
      }
      set accNumber(accountNumber:number){
        this.accountNumber=accountNumber;
      }
      get custName(){
        return this.customerName
      }
      set custName(customerName:string){
        this.customerName=customerName;
      }
    // implement getter setter for remaining instance variables

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
//Property 'accountNumber' is private and only accessible within class 'BankAccount'
//console.log(account1.accountNumber);
//Property 'customerName' is private and only accessible within class 'BankAccount'.
//account1.customerName="Pradeep";
console.log(account1.accNumber); // getter
account1.custName="Pradeep";  // setter