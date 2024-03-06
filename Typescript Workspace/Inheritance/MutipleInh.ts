class Father{
    dream():string{
        return "Doctor"
    }
}
class Mother{
    dream():string{
        return "Engineer"
    }
}

class Child extends Father, Mother{
    achieveDream(){
        this.dream(); // ambiguity
    }
}

interface FatherIntf{
    dream():string;
}
interface MotherIntf{
    dream():string;
}
class Child2 implements FatherIntf, MotherIntf{
    dream(): string {
        return "Lawyer"
    }
}