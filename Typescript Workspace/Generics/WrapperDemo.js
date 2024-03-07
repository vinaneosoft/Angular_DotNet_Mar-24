var s1 = "india"; // primitive  string literal
var s2 = "india"; // string literal
var s3 = "country india";
console.log(s1 == s2); // true
console.log(s1 == s3); // false
console.log(typeof s1); // string
var s4 = new String('Pooja'); // Wrapper : String object
var s5 = new String('Pooja');
var s6 = new String(s1);
console.log(s4 == s5); //false
console.log(s4 === s5); //false
console.log(s4.valueOf() == s5.valueOf()); // true
console.log(typeof s4); // object
console.log(s4.toUpperCase()); // POOJA
console.log(s4); // Pooja
var n1 = 45;
var n2 = new Number(n1);
console.log(n2 instanceof Number);
var n3;
n3 = n1; // not Wrapping
console.log(n3 instanceof Number);
