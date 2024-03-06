var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee(employeeName, deptId, basicSalary, employeeId) {
        if (employeeName === void 0) { employeeName = "not set"; }
        if (deptId === void 0) { deptId = "not assigned"; }
        if (basicSalary === void 0) { basicSalary = 0; }
        if (employeeId === void 0) { employeeId = 0; }
        this.employeeName = employeeName;
        this.deptId = deptId;
        this.basicSalary = basicSalary;
        this.employeeId = employeeId;
    }
    NeoEmployee.prototype.getGrossSalary = function () {
        // ta : 5%, da: 10% hra 12 %
        console.log("in NeoEmployee method");
        return this.basicSalary + 0.05 * this.basicSalary + 0.1 * this.basicSalary + 0.12 * this.basicSalary;
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer(ename, did, bs, eid, trainingTechnologies, payPerHour, extraWorkingHrs) {
        if (ename === void 0) { ename = 'not set'; }
        if (did === void 0) { did = 'not assigned'; }
        if (bs === void 0) { bs = 0; }
        if (eid === void 0) { eid = 0; }
        if (trainingTechnologies === void 0) { trainingTechnologies = []; }
        if (payPerHour === void 0) { payPerHour = 0; }
        if (extraWorkingHrs === void 0) { extraWorkingHrs = 0; }
        /** Constructors for derived classes must contain a 'super' call */
        var _this = _super.call(this, ename, did, bs, eid) || this; // 0-p con
        _this.trainingTechnologies = trainingTechnologies;
        _this.payPerHour = payPerHour;
        _this.extraWorkingHrs = extraWorkingHrs;
        _this.payPerHour = 90;
        return _this;
    }
    // assume trainer getting extrapay for extra hrs of training per month
    NeoTrainer.prototype.extraPay = function () {
        return this.extraWorkingHrs * this.payPerHour;
    };
    // new formula for gross salary for trainer
    // bs+ta+da+hra+ep
    NeoTrainer.prototype.getGrossSalary = function () {
        console.log("in NeoTrainer method");
        return _super.prototype.getGrossSalary.call(this) + this.extraPay();
    };
    return NeoTrainer;
}(NeoEmployee));
console.log("------EMPLOYEE---------------");
var neoemployee = new NeoEmployee();
neoemployee.employeeId = 999;
neoemployee.deptId = "DN";
neoemployee.employeeName = "Kumar";
neoemployee.basicSalary = 89000;
/** Property 'experience' is protected and only accessible within class 'NeoEmployee' and its subclasses */
//neoemployee.experience=10;
console.log(neoemployee.getGrossSalary());
console.log("------TRAINER 1---------------");
var techArray = ['JAVA', 'HTML', 'Javascript', 'Bootstrap'];
var trainer = new NeoTrainer("Mayura", "DN", 56000, 111, techArray, 1000, 15); // call goes to super class constructor, then subclass constr
console.log(trainer);
console.log(trainer.getGrossSalary()); // polymorphism  // NeoTrainer
console.log("------TRAINER 2---------------");
var techArray2 = ['Python', 'DotNet', 'MongoDB', 'NODE'];
var trainer2 = new NeoTrainer("Roma", "DN", 57000, 121, techArray2, 1200, 30); // call goes to super class constructor, then subclass constr
console.log(trainer2);
console.log(trainer2.getGrossSalary());
