class NeoEmployee{
    employeeId:number;
    employeeName:string;
    deptId:string;
    basicSalary:number;
    protected experience:number;
    getGrossSalary():number{
        // ta : 5%, da: 10% hra 12 %
        console.log("in NeoEmployee method");     
        return this.basicSalary+0.05*this.basicSalary+0.1*this.basicSalary+0.12*this.basicSalary;
    }
}

class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[];
    payPerHour:number;
    extraWorkingHrs:number;
    // assume trainer getting extrapay for extra hrs of training per month
     extraPay(){
        return this.extraWorkingHrs*this.payPerHour;
    }
    // new formula for gross salary for trainer
    // bs+ta+da+hra+ep
     getGrossSalary():number{
        console.log("in NeoTrainer method");
        return this.basicSalary+0.05*this.basicSalary+0.1*this.basicSalary+0.12*this.basicSalary+this.extraPay();
    } 

}

class SoftSkillTrainer extends NeoTrainer{
    getGrossSalary():number{
        return 9999;
    }
}
console.log("------EMPLOYEE---------------");

let neoemployee=new NeoEmployee();
neoemployee.employeeId=999;
neoemployee.deptId="DN";
neoemployee.employeeName="Kumar";
neoemployee.basicSalary=89000;
/** Property 'experience' is protected and only accessible within class 'NeoEmployee' and its subclasses */
//neoemployee.experience=10;
console.log(neoemployee.getGrossSalary());

console.log("------TRAINER---------------");
let trainer=new NeoTrainer();
trainer.employeeId=888;
trainer.employeeName="Mayura";
trainer.basicSalary=89000;
trainer.deptId="LD";
trainer.trainingTechnologies=['JAVA','HTML','Javascript','Bootstrap'];
trainer.payPerHour=1000;
trainer.extraWorkingHrs=15;
console.log(trainer.getGrossSalary()); // polymorphism 



