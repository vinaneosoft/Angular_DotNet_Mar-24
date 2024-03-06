class NeoEmployee{
    protected experience:number;
    constructor(public employeeName="not set",
    public deptId="not assigned", 
    public basicSalary=0, 
    public employeeId=0){
    }
    getGrossSalary():number{
        // ta : 5%, da: 10% hra 12 %
        console.log("in NeoEmployee method");     
        return this.basicSalary+0.05*this.basicSalary+0.1*this.basicSalary+0.12*this.basicSalary;
    }
}
class NeoTrainer extends NeoEmployee{
    constructor(ename='not set', did='not assigned', bs=0, eid=0,  public trainingTechnologies:string[]=[],public payPerHour=0,public extraWorkingHrs=0){
        /** Constructors for derived classes must contain a 'super' call */
        super(ename,did,bs,eid); // p con
    }
    // assume trainer getting extrapay for extra hrs of training per month
     extraPay(){
        return this.extraWorkingHrs*this.payPerHour;
    }
    // new formula for gross salary for trainer
    // bs+ta+da+hra+ep
    getGrossSalary():number{
        console.log("in NeoTrainer method");
        return super.getGrossSalary()+this.extraPay();
    } 
}

console.log("------EMPLOYEE---------------");
let neoemployee=new NeoEmployee("Kumar","DN",89000,999);
/** Property 'experience' is protected and only accessible within class 'NeoEmployee' and its subclasses */
//neoemployee.experience=10;
console.log(neoemployee.getGrossSalary());

console.log("------TRAINER 1---------------");
let techArray=['JAVA','HTML','Javascript','Bootstrap'];
let trainer=new NeoTrainer("Mayura","DN", 56000, 111, techArray,1000,15); // call goes to super class constructor, then subclass constr
console.log(trainer);
console.log(trainer.getGrossSalary()); // polymorphism  // NeoTrainer

console.log("------TRAINER 2---------------");
let techArray2=['Python','DotNet','MongoDB','NODE'];
let trainer2=new NeoTrainer("Roma","DN", 57000, 121,techArray2,1200,30); // call goes to super class constructor, then subclass constr
console.log(trainer2);
console.log(trainer2.getGrossSalary());