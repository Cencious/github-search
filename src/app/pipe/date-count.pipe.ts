import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let valueArr =value.replace()

    
    return value;
  }

}
