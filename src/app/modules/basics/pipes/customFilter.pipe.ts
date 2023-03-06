import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(Array: any[], value: string, attribute: string): any[] {
    if(!value){return Array}
    if(!attribute){return Array}
    return Array.filter(item => item[attribute]?.toLowerCase().includes(value.toLowerCase()));
  }

}
