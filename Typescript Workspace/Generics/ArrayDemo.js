var array = [7880000, "hi", 4545645, true, 6767676];
// duplicate allowed, indexed collection
var salaryArray = new Array();
/** Array<number>.push(...items: number[]): number */
salaryArray.push(78000, 90000, 67000, 78000, 34000, 45000, 90000);
salaryArray.push(78000);
salaryArray.push(78000, 67000);
salaryArray.push(77000);
salaryArray.push();
console.log("Popped element:" + salaryArray.pop());
console.log(salaryArray);
// for loop, for of,  forEach
salaryArray.forEach(function (ele) { return console.log(ele); }); // js 
salaryArray[2] = 12000; // index
salaryArray.splice(3, 1); //index
console.log(salaryArray);
var departments = new Array();
/** Array<string>.push(...items: string[]): number */
departments.push('LD', 'DN');
console.log(departments.pop());
/**
 * push(...items : T[]):number{
 *
 * }
 *
 * pop(): T {
 * }
 *
 */ 
