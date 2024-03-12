import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {
  transform(value: number | string, ...args: any[]):string {
   // console.log(value);
   // console.log(args);
    
    return args[0]+"-"+value;
  }
}
