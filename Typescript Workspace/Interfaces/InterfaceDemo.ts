
interface DeveloperIntf{
    employeeId:number;
    departmentId:string;
    showDetails():void;
}
class NeoDeveloper implements DeveloperIntf{
    employeeId: number;
    departmentId:string;
    showDetails(): void {
      console.log("NeoDeveloper Details");
    }
}
class WebWerksDeveloper implements DeveloperIntf{
    employeeId:number;
    departmentId: string;
    showDetails(): void {
        console.log("WebWerksDeveloper Details");
    }
}

let developer:DeveloperIntf;
developer=new NeoDeveloper();
developer.employeeId=111;
developer.departmentId="JS";
developer.showDetails();


developer=new WebWerksDeveloper();
developer.employeeId=123;
developer.departmentId="UIUX"
developer.showDetails();