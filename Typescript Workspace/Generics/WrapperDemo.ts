
let s1="india"; // primitive  string literal
let s2="india"; // string literal
let s3="country india"
console.log(s1==s2);// true
console.log(s1==s3); // false

let s4=new String('Pooja'); // Wrapper : String object
let s5=new String('Pooja');
console.log(s4==s5);//false
console.log(s4===s5);//false
console.log(s4.valueOf()==s5.valueOf());// true





