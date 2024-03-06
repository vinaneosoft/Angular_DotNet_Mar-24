class NeoEmployee{
    static companyName:string;
    constructor(public employeeName="AAA", public deptId="DN", public employeeId=0){
        console.log("in constructor");
    } 
    static{
        console.log("in static block");
        this.companyName="Neosoft Technologies";
    }
    showDetails(){
        console.log(`
        Id: ${this.employeeId} 
        Name: ${this.employeeName}
        Deparment Id: ${this.deptId}`);
    }
    static getCompany(){
       return NeoEmployee.companyName; 
    }
}


const employee1=new NeoEmployee("Mayur");
employee1.showDetails();

const employee2=new NeoEmployee("Pawan");
employee2.showDetails();

const employee3=new NeoEmployee("Rahul");
employee3.showDetails();

const employee4=employee1;
console.log(employee1==employee4);
console.log(employee1===employee4);

console.log(NeoEmployee.companyName);
console.log(NeoEmployee.getCompany());





