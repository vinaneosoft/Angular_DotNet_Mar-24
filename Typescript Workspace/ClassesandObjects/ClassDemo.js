// capital case
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    // instance method : behavior
    // camel case, verb
    BankAccount.prototype.depositMoney = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        this.accountBalance = this.accountBalance - amount;
        return this.accountBalance;
    };
    return BankAccount;
}());
var account1;
account1 = new BankAccount(); // calling consturctor
var account2 = new BankAccount();
console.log("account1:");
console.log(account1);
console.log(account1.accountNumber);
console.log("account2:");
console.log(account2);
console.log(account2.accountNumber);
