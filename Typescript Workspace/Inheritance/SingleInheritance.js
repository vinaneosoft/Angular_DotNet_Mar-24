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
    function NeoEmployee() {
    }
    NeoEmployee.prototype.getGrossSalary = function () {
        // ta : 5%, da: 10% hra 12 %
        return this.basicSalary + 0.05 * this.basicSalary + 0.1 * this.basicSalary + 0.12 * this.basicSalary;
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NeoTrainer;
}(NeoEmployee));
console.log("------EMPLOYEE---------------");
var neoemployee = new NeoEmployee();
neoemployee.employeeId = 999;
neoemployee.deptId = "DN";
neoemployee.employeeName = "Kumar";
neoemployee.basicSalary = 89000;
console.log(neoemployee.getGrossSalary());
console.log("------TRAINER---------------");
var trainer = new NeoTrainer();
trainer.employeeId = 888;
trainer.employeeName = "Mayura";
trainer.basicSalary = 95000;
trainer.deptId = "LD";
trainer.trainingTechnologies = ['JAVA', 'HTML', 'Javascript', 'Bootstrap'];
console.log(trainer.getGrossSalary()); // super class method
