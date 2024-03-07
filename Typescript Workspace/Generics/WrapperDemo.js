var s1 = "india"; // primitive  string literal
var s2 = "india"; // string literal
var s3 = "country india";
console.log(s1 == s2); // true
console.log(s1 == s3); // false
var s4 = new String('Pooja');
var s5 = new String('Pooja');
console.log(s4 == s5); //false
console.log(s4 === s5); //false
console.log(s4.valueOf() == s5.valueOf());
