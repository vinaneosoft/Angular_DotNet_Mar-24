class Animal{
    eat():void{
        console.log("All Animals eat");        
    }
}
class Tiger extends Animal{
    tigerType:string;
    eat():void{
        console.log("Tigers eat other Animals");      
    }
}
class Sheep extends Animal{
    sheepType:string
    eat():void{
        console.log("Sheeps eat grass");       
    }
    sleep(){
    }
}




let animal:Animal;
animal=new Animal();
animal.eat();
// upcasting
animal=<Animal>new Tiger();
animal.eat();
animal=new Sheep();
animal.eat();

let tiger=new Tiger();
let sheep=new Sheep();
commonMethod(tiger);
commonMethod(sheep);
function commonMethod(an:Animal){
    /** all animals allowed */
    /** if tiger comes here, eat must called of tiger, if sheep comes here eat must be called of*/ 
    an.eat(); // inherited overriding methods
}