var company;
var Company = /** @class */ (function () {
    function Company() {
        console.log("in constr");
    }
    Company.getInstance = function () {
        if (company == null) {
            company = new Company();
        }
        return company;
    };
    return Company;
}());
//1. restrict creating objects with new from outside
//let company1=new Company();
//let company2=new Company();
// 2. static method which will return the object of class
var company1 = Company.getInstance();
var company2 = Company.getInstance();
var company3 = Company.getInstance();
console.log(company1 == company2);
