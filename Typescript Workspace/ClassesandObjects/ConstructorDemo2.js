class BankAccount {
    constructor(custName = "not set", accountType = "savings", balance = 0, customerId = 0, accNum = 0) {
        this.customerName = custName;
        this.accountNumber = accNum;
        this.accountBalance = balance;
        this.accountType = accountType;
        this.customerId = customerId;
    }
    depositMoney(amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    }
    withdrawMoney(amount) {
        this.accountBalance = this.accountBalance - amount;
        return this.accountBalance;
    }
    display() {
        console.log(`Account Details are : 
      account number : ${this.accountNumber},
      customer name: ${this.customerName}`);
    }
}
let account1 = new BankAccount("Kuldeep", "savings", 56000, 888, 90909090); // p c
console.log("account1", account1);
account1.display(); // behavour
let account2 = new BankAccount("Deepak", "savings", 45000, 777, 77777777); // p c
console.log("account2", account2);
account2.display();
let account3 = new BankAccount("Deepika", "current", 45000, 666); // p c
console.log("account3", account3);
let account4 = new BankAccount("Deepa", "savings", 45000); // p c
console.log("account4", account4);
let account5 = new BankAccount("Mohan"); // p c
console.log("account5", account5);
let account6 = new BankAccount(); // p c
console.log("account6", account6);
let account7 = new BankAccount("Kuldeep", "savings", 56000, 888, 90909090);
// ? used to  represent optional parameter for methods
let accSet = new Set();
accSet.add(account1);
accSet.add(account2);
accSet.add(account7);
console.log("-----------------------");
accSet.forEach(acc => console.log(acc));
