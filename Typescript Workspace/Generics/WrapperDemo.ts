
let s1="india"; // primitive  string literal
let s2="india"; // string literal
let s3="country india"
console.log(s1==s2);// true
console.log(s1==s3); // false
console.log(typeof s1); // string
let s4=new String('Pooja'); // Wrapper : String object
let s5=new String('Pooja');
let s6=new String(s1);
console.log(s4==s5);//false
console.log(s4===s5);//false
console.log(s4.valueOf()==s5.valueOf());// true
console.log(typeof s4); // object
console.log(s4.toUpperCase());// POOJA
console.log(s4); // Pooja

let n1=45;
let n2=new Number(n1);
console.log(n2 instanceof Number);
let n3:Number;
n3=n1; // not Wrapping
console.log(n3 instanceof Number);

let marriedStatus=true;
let married=new Boolean(marriedStatus);