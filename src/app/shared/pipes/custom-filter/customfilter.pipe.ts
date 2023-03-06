import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customfilter'
})
export class CustomfilterPipe implements PipeTransform {

  transform(items: any[], attribute: string, valueSearch: string): any[]{    
    if (!items) return [];
    if (!attribute) return items;
    return items.filter(item => item[attribute]?.toLowerCase().includes(valueSearch?.toLowerCase()));    
  }
}
