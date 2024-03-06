let company;
class Company{
    private constructor(){
        console.log("in constr");   
    }

    static getInstance(){   
        if(company==null){
         company=new Company();
        }
        return company;
    }
}
//1. restrict creating objects with new from outside
//let company1=new Company();
//let company2=new Company();

// 2. static method which will return the object of class
let company1=Company.getInstance();
let company2=Company.getInstance();
let company3=Company.getInstance();
console.log(company1==company2);
