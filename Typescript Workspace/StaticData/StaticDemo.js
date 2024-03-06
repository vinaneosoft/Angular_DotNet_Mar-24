var _a;
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(employeeName, deptId, employeeId) {
        if (employeeName === void 0) { employeeName = "AAA"; }
        if (deptId === void 0) { deptId = "DN"; }
        if (employeeId === void 0) { employeeId = 0; }
        this.employeeName = employeeName;
        this.deptId = deptId;
        this.employeeId = employeeId;
        console.log("in constructor");
        _a.count++;
    }
    NeoEmployee.prototype.showDetails = function () {
        console.log("\n        Id: ".concat(this.employeeId, " \n        Name: ").concat(this.employeeName, "\n        Deparment Id: ").concat(this.deptId));
    };
    NeoEmployee.getCompany = function () {
        return _a.companyName;
    };
    return NeoEmployee;
}());
_a = NeoEmployee;
(function () {
    console.log("in static block");
    _a.companyName = "Neosoft Technologies";
    _a.count = 0; // this means NeoEmployee
})();
console.log(NeoEmployee.count);
var employee1 = new NeoEmployee("Mayur");
employee1.showDetails();
var employee2 = new NeoEmployee("Pawan");
employee2.showDetails();
var employee3 = new NeoEmployee("Rahul");
employee3.showDetails();
console.log(NeoEmployee.count);
var employee4 = employee1;
console.log(employee1 == employee4);
console.log(employee1 === employee4);
console.log(NeoEmployee.companyName);
console.log(NeoEmployee.getCompany());
