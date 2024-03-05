// Js : dynamically typed lang
// ts: statically typed lang
var salary;
salary = 67000;
console.log(typeof salary);
salary = "sixty seven thousand";
console.log(typeof salary);
var collegeName; // type annotations
//collegeName=56789;
collegeName = "LT college";
console.log(collegeName);
// string, number, boolean
// String, Number, Boolean, Custom Data type
// any type
// npm install tsc
// npm must be installed
// node to install:- npm :- tsc
var a;
var a;
//document.write("dsfdsnjdngkjfnkjnfg")
var empId;
empId = 890;
console.log(typeof empId);
empId = "NEO890";
console.log(typeof empId);
empId = false;
console.log(typeof empId);
var empCode;
empCode = 7878787;
empCode = "EM3455";
var cityName = "Mumbai"; // string
//cityName=89999;
function add() {
    // code
    return "Hi";
}
add();
function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(45, 67));
var res = add1(56, 78);
console.log(res);
function sum(n1, n2, n3) {
    console.log(n1 + n2 + n3);
}
sum(56, 4, 7);
var add2 = function (s1, s2) {
    return s1 + "-" + s2;
};
console.log(add2("Neosoft", "Rabale"));
var cube = function (num) {
    console.log(num * num * num);
};
cube(6);
// arrow functions
//1. no name, no function keyword, 
//2. => between () and {}
//Rule : 1. if arrow function contains single stmt in body then {} are optional
var arrowFun = function (num) { return console.log(num * num * num); };
// Rule 2: if arrow function accepting one parameter then, () optional , do not put type annotations in this case
var arrowFun1 = function (num) { return console.log(num * num * num); };
// Rule 3: if arrow function contains single return stmt then remove return keyword,
//body will automatically return the result
var arrowFun2 = function (num) { return num * num * num; };
console.log("cube is:" + arrowFun2(4));
var cubeFun = function (num) { return num * num * num; }; // inline functions
var result = cubeFun(6);
console.log(result);
