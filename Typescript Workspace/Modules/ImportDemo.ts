import { BankAccount, bankName, changeBank} from "./module1";
import { BankAccount as SCAccount, bankName as bank} from "./module2";
import * as m3 from './module3';

import cname from './module3' // companyName
//-----------module1------------
let account1=new BankAccount();
account1.accountNumber=3434343434;
account1.accountNumber=78787878;
console.log(bankName);
/**Cannot assign to 'bankName' because it is an import */
//bankName="SBI"
changeBank("SBI");
console.log(bankName);
//-----------module2------------
let scacount1=new SCAccount();
scacount1.accountType="savings"
console.log(bank);
//-----------module3------------

console.log(m3.departmentName);
console.log(m3.trainerName);
console.log(m3.default);

console.log(cname);
