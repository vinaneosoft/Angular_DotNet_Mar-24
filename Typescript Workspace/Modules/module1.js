// Module : module1
export class BankAccount {
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
}
export let bankName = "Axis";
export function changeBank(bn) {
    bankName = bn;
}
