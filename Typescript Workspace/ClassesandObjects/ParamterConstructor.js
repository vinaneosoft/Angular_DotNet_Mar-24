var BankAccount = /** @class */ (function () {
    function BankAccount(custName, accountType, balance, customerId, accNum) {
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
// ? used to  represent optional parameter for methods
