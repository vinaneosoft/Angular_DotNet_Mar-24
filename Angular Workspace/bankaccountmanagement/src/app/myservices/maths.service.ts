import { Injectable } from '@angular/core';

export interface ABC{
  serviceCounter:number
  incrementCounter():void;
  getCounter():number;
}
@Injectable({
  providedIn: 'root'
})
export class MathsService  implements ABC{
  public serviceCounter:number;
  constructor() {
    this.serviceCounter=0;
   }

   incrementCounter():void{
    this.serviceCounter++;
   }

   getCounter():number{
    return this.serviceCounter;
   }
}
