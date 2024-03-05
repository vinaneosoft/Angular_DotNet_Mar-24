var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.customerName = "not given";
        this.accountNumber = 0;
        this.accountBalance = 0;
        this.accountType = "savings";
        this.customerId = 0;
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
        console.log("Account Details are : \n        account number : ".concat(this.accountNumber, ",\n        customer name: ").concat(this.customerName));
    };
    return BankAccount;
}());
//  created, 1. initilization phase  (happence only once) : constructor implicitly called
// default constructor : no p
var account1 = new BankAccount(); // d c
console.log("account1", account1);
account1.display();
var account2 = new BankAccount(); // d c
console.log("account2", account2);
account2.display();
