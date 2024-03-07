let n1=45;
let n2=45;
let n3='45';
console.log(n1==n2); // true
console.log(n1==n3); // true
console.log(n1===n3); // false
console.log("abc"=="ABC"); // case sensitive

let s1="india"; // primitive  string literal
let s2="india"; // string literal
let s3="country india"
console.log(s1==s2);// true
console.log(s1==s3); // false

let s4=new String('Pooja');
let s5=new String('Pooja');
console.log(s4==s5);//false
console.log(s4===s5);//false
console.log(s4.valueOf()==s5.valueOf());// true

