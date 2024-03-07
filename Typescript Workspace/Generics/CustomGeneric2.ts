
interface QueueIntf<T>{
    insert(e:T):number; // after insertion it will return new length of queue
    remove():T | undefined ;
}

class Queue implements QueueIntf<number>{
    private array=new Array<number>();
    insert(e: number): number {
            return this.array.push(e);    
    }
    remove(): number | undefined {
        return this.array.shift();
    }
    
    get all(){
        return this.array;
    }
}

let queue=new Queue();
queue.insert(56);
queue.insert(57);
queue.insert(45);
console.log(queue.all);


class MyQueue<T>{
    private array=new Array<T>();
    insert(e: T): number {
            return this.array.push(e);    
    }
    remove(): T | undefined {
        return this.array.shift();
    } 
    get all() : T[]{
        return this.array;
    }
}

let myq=new MyQueue<number>();

let myq2=new MyQueue<string>();