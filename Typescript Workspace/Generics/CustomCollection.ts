import { BankAccount } from "../Modules/module1";


let account1=new BankAccount("Pooja","Savings",67000,111,77777777);
let account2=new BankAccount("Poonam","Savings",47000,222,66666666);
let account3=new BankAccount("Suraj","Savings",67000,444,99999999);
let account4=new BankAccount("Prachi","Current",27000,333,88888888);
let account5=new BankAccount("Pooja","Savings",67000,111,77777777);
let accounts=new Array<BankAccount>(account1,account2,account3,account4,account5);

accounts.forEach(acc=>console.log(acc));

 let accSet=new Set<BankAccount>(accounts);
accSet.forEach(acc=>console.log(acc));


