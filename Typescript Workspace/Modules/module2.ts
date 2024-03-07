//Module name : module2


export class BankAccount{
    accountNumber:number
    accountBalance:number
    accountType:string
    customerId:number;
    public customerName:string
  constructor(custName="not set", accountType="savings",balance=0,customerId=0, accNum=0){
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
}

let bankName="SC"