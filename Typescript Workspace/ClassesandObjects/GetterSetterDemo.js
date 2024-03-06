var BankAccount = /** @class */ (function () {
    function BankAccount(customerName, accountType, accountBalance, customerId, accountNumber) {
        if (customerName === void 0) { customerName = "not set"; }
        if (accountType === void 0) { accountType = "savings"; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (accountNumber === void 0) { accountNumber = 0; }
        this.customerName = customerName;
        this.accountType = accountType;
        this.accountBalance = accountBalance;
        this.customerId = customerId;
        this.accountNumber = accountNumber;
    }
    Object.defineProperty(BankAccount.prototype, "accNumber", {
        get: function () {
            return this.accountNumber;
        },
        set: function (accountNumber) {
            this.accountNumber = accountNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "custName", {
        get: function () {
            return this.customerName;
        },
        set: function (customerName) {
            this.customerName = customerName;
        },
        enumerable: false,
        configurable: true
    });
    // implement getter setter for remaining instance variables
    BankAccount.prototype.depositMoney = function (amount) {
        if (amount === void 0) { amount = 0; }
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdrawMoney = function (amount) {
        if (amount === void 0) { amount = 0; }
        this.accountBalance = this.accountBalance - amount;
        return this.accountBalance;
    };
    BankAccount.prototype.display = function () {
        console.log("Account Details are : \n        account number : ".concat(this.accountNumber, ",\n        customer name: ").concat(this.customerName));
    };
    return BankAccount;
}());
var account1 = new BankAccount("Kuldeep", "savings", 56000, 888, 90909090); // p c
console.log("account1", account1);
//Property 'accountNumber' is private and only accessible within class 'BankAccount'
//console.log(account1.accountNumber);
//Property 'customerName' is private and only accessible within class 'BankAccount'.
//account1.customerName="Pradeep";
console.log(account1.accNumber); // getter
account1.custName = "Pradeep"; // setter
