import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  bankName="HDBC Bank";
  officeLocation="rabale";
  customerAge=0;
  display(){
    console.log(this.bankName);
    console.log(this.officeLocation);
  }
  test(){
    console.log("Element is focussed");
  }

  inputmethod1(node:any){
    console.log(typeof node);
      console.log(node);
  }
  inputmethod2(age:any){
    console.log(typeof age);
      console.log(age);
  }


}
