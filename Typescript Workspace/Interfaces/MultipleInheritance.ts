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

interface StackIntf{
    push(e:number):number;
    pop():number;
    display():void
}

interface QueueIntf{
    insert(e:number):number;
    remove():number;
    display():void
}

interface DequeInterface extends QueueIntf{
    insertFront(e:number):number;
    removeLast():number;
}

class Deque implements DequeInterface{
    display(): void {
       
    }

    insertFront(e: number): number {
        return 0
    }
    removeLast(): number {
        return 0
    }
    insert(e: number): number {
        return 0
    }
    remove(): number {
        return 0
    }
    //2, 4 ?
}

// rule : mulitple interfaces can be extended by another interface , if method signature in those
// interfaces is same then another interface can inherit it one time
// if method name is same and signature is difft then, error occurs. In this case at a time
// we can not extend those multiple interfaces
interface MixIntf extends StackIntf, QueueIntf{
    // empty
}

/** class can extend one class
 * class can implement many interfaces
 * interface can extend many interfaces
 */

/** 
 * class B{}
 * class A implements B  : wrong
 * 
 * 
 * interface B{}
 * class A implements B   : right
 * 
 * interface C{}
 *  interface D implements C : wrong
 * 
 *  interface E extends B,C  : right
 * 
 * class M extends A implements B : right
 * 
 * class M implements B extends A : wrong
 * 
 * class X{} class Y{}
 * interface Z extends X,Y   : wrong
 */