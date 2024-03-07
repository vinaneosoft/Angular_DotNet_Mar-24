"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module1_1 = require("./module1");
var module2_1 = require("./module2");
var m3 = require("./module3");
var module3_1 = require("./module3");
//-----------module1------------
var account1 = new module1_1.BankAccount();
account1.accountNumber = 3434343434;
account1.accountNumber = 78787878;
console.log(module1_1.bankName);
/**Cannot assign to 'bankName' because it is an import */
//bankName="SBI"
(0, module1_1.changeBank)("SBI");
console.log(module1_1.bankName);
//-----------module2------------
var scacount1 = new module2_1.BankAccount();
scacount1.accountType = "savings";
console.log(module2_1.bankName);
//-----------module3------------
console.log(m3.departmentName);
console.log(m3.trainerName);
console.log(module3_1.default);
