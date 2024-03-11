import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  bankName="HDBC Bank";
  officeLocation="dadar";
  customerAge:number=0;
  percentage=0;

 cities=['rabale','pune','dadar','parel'];
 menus =['idli', 'medu vada','dosa', 'uttapa','poha','upma'];

 constructor(){
  console.log("In LearningComponent");
  window.setTimeout(()=>this.changeStyle(), 5000);
 }

  changeStyle(){
    this.styleObject.backgroundColor="#00ffbf";
  }
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

  styleObject={
    backgroundColor:'yellow',
    color:'red',
    border:'4px solid blue'
  }

  /**NgClass can only toggle CSS classes expressed as strings,  */
  styleArray=["fontStyle","borderStyle"];

  styleClassObject={
    "fontStyle": true,
    "borderStyle":true
  }
}
