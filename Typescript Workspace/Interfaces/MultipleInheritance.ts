interface FatherIntf{
    dream():string;
    hobbies():string;
}

interface MotherIntf{
    dream():string;
    timeSchedule():void;
}
// rule : mulitple interfaces can be implement by one class , if method signature in those
// interfaces in same then override that method one time but 
// if method name is same and signature is difft then, error occurs. In this case at a time
// we can not implement those interfaces
class Child implements FatherIntf, MotherIntf{
    hobbies(): string {
        return "singing"
    }
    timeSchedule(): void {
        
    }
    dream(): string {
       return "Lawyer";
    }
   
}