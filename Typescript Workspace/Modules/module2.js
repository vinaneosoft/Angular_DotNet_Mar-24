"use strict";
//Module name : module2
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankName = exports.BankAccount = void 0;
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
    return BankAccount;
}());
exports.BankAccount = BankAccount;
exports.bankName = "SC";
