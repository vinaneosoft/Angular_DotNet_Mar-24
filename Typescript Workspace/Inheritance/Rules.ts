class Department{
    getEmployee():NeoEmployee{
        return new NeoEmployee(); // def initial value
    }
    protected getBudget():void{
      
    }
}
class LDDepartment extends Department{
    getEmployee():NeoTrainer{
        return new NeoTrainer();// def initial value
    }
   getBudget():number{
        return 0;
    }
}



// if super class method returning object, then subclass overriding method can return covarient of super return type
// if super class method return type is primitive then , we can change in subclass......
// if super class method void, then any (string, number, boolean, object) return type in subclass o.method...
// scope same , increased is allowed, but can not be decreased
