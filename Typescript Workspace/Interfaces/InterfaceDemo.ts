
interface DeveloperIntf{
    employeeId:number;
    departmentId:number;
    showDetails():void;
}
class NeoDeveloper implements DeveloperIntf{
    employeeId: number;
    departmentId:number;
    showDetails(): void {
      console.log("NeoDeveloper Details");
    }


}

class WebWerksDeveloper implements DeveloperIntf{
    employeeId:number;
    departmentId: number;
    showDetails(): void {
        console.log("WebWerksDeveloper Details");
    }
}


let developer:DeveloperIntf;

developer=new NeoDeveloper();
developer.showDetails();


developer=new WebWerksDeveloper();
developer.showDetails();