import { BankAccount, bankName, changeBank} from "./module1";
import { BankAccount as SCAccount, bankName as bank} from "./module2";

let account1=new BankAccount();
// function,acc instance var
account1.accountNumber=3434343434;
account1.accountNumber=78787878;
console.log(bankName);
/**Cannot assign to 'bankName' because it is an import */
//bankName="SBI"
changeBank("SBI");
console.log(bankName);


let scacount1=new SCAccount();
scacount1.accountType="savings"
console.log(bank);
