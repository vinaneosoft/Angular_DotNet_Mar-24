class BankAccount{
      accountNumber:number
      accountBalance:number
      accountType:string
      customerId:number;
      public customerName:string

    constructor(){
        this.customerName="not given";
        this.accountNumber=0;
        this.accountBalance=0;
        this.accountType="savings";
        this.customerId=0;
    }   
    /** Multiple constructor implementations are not allowed. */
  /*   constructor(accountNumber:number){

    } */
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
    /**Duplicate function implementation. */
  }
  
  //  created, 1. initilization phase  (happence only once) : constructor implicitly called
  // default constructor : no p

  let account1=new BankAccount(); // d c
  console.log("account1", account1);
  account1.display(); // behavour

  let account2=new BankAccount(); // d c
  console.log("account2", account2);
  account2.display();

  account1.customerName="Poonam"; // state change

  // ? used to  represent optional parameter for methods