class Accept<P>{   // any alphabet but convention is : T, E, K , V
   private value : P;
   constructor(val:P){
    this.value=val;
   }
  
   getValue(): P{
        return this.value;
   }
}


let accept1=new Accept<number>(34);
let accept2=new Accept<string>("hi");
let accept3=new Accept<boolean>(true);

accept1.getValue();
accept2.getValue();
accept3.getValue();