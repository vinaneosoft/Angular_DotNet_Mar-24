class NeoEmployee{
    employeeId:number;
    employeeName:string;
    deptId:string;
    basicSalary:number;

    getGrossSalary():number{
        // ta : 5%, da: 10% hra 12 %
        return this.basicSalary+0.05*this.basicSalary+0.1*this.basicSalary+0.12*this.basicSalary;
    }

}

class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[]
}
console.log("------EMPLOYEE---------------");

let neoemployee=new NeoEmployee();
neoemployee.employeeId=999;
neoemployee.deptId="DN";
neoemployee.employeeName="Kumar";
neoemployee.basicSalary=89000;
console.log(neoemployee.getGrossSalary());

console.log("------TRAINER---------------");
let trainer=new NeoTrainer();
trainer.employeeId=888;
trainer.employeeName="Mayura";
trainer.basicSalary=95000;
trainer.deptId="LD";
trainer.trainingTechnologies=['JAVA','HTML','Javascript','Bootstrap'];
console.log(trainer.getGrossSalary()); // super class method
