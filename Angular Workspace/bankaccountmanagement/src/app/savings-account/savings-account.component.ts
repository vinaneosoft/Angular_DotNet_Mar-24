import { Component } from '@angular/core';
import { MathsService } from '../myservices/maths.service';

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrl: './savings-account.component.css'
})
export class SavingsAccountComponent {

  counter1=this.maths1.serviceCounter;
 constructor(private maths1:MathsService){  // DI
 }

 getCount(){
    this.maths1.incrementCounter();
    this.counter1=this.maths1.getCounter();
 }
}
