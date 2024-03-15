let array=[7880000,"hi",4545645, true, 6767676]; 

// duplicate allowed, indexed collection
let salaryArray=new Array<number>();
salaryArray.push(78000,90000,67000,78000,34000,45000,90000);
salaryArray.push(78000);
salaryArray.push("fifty thousand");


console.log("Popped element:"+salaryArray.pop());
console.log(salaryArray);

salaryArray.forEach(ele=>console.log(ele)); 
salaryArray[2]=12000;  // index
salaryArray.splice(3,1);  //index
console.log(salaryArray);

let departments=new Array<string>();
departments.push('LD','DN', 'JS','UIUX');
departments.push('DN', 'JS');
departments.push(345);
/**
 *  push(...items : T[]):number{
 *    // logic of pushing data in array
 *  }
 * 
 *  pop(): T | undefined {
 *   // login of popping data from array and returning
 *  }
 * 
 */