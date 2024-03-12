import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    //console.log(value); 
   // console.log(args[0]);  
    const property=args[0];
    return value.sort((account1,account2)=>account1[property]>account2[property]?1:-1)
  }
  
}

