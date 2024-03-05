var BankAccount = /** @class */ (function () {
    function BankAccount(custName, accountType, balance, customerId, accNum) {
        if (custName === void 0) { custName = "not set"; }
        if (accountType === void 0) { accountType = "savings"; }
        if (balance === void 0) { balance = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (accNum === void 0) { accNum = 0; }
        this.customerName = custName;
        this.accountNumber = accNum;
        this.accountBalance = balance;
        this.accountType = accountType;
        this.customerId = customerId;
    }
    BankAccount.prototype.depositMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        this.accountBalance = this.accountBalance - amount;
        return this.accountBalance;
    };
    BankAccount.prototype.display = function () {
        console.log("Account Details are : \n      account number : ".concat(this.accountNumber, ",\n      customer name: ").concat(this.customerName));
    };
    return BankAccount;
}());
var account1 = new BankAccount("Kuldeep", "savings", 56000, 888, 90909090); // p c
console.log("account1", account1);
account1.display(); // behavour
var account2 = new BankAccount("Deepak", "savings", 45000, 777, 77777777); // p c
console.log("account2", account2);
account2.display();
var account3 = new BankAccount("Deepika", "current", 45000, 666); // p c
console.log("account3", account3);
var account4 = new BankAccount("Deepa", "savings", 45000); // p c
console.log("account4", account4);
var account5 = new BankAccount("Mohan"); // p c
console.log("account5", account5);
var account6 = new BankAccount(); // p c
console.log("account6", account6);
// ? used to  represent optional parameter for methods
