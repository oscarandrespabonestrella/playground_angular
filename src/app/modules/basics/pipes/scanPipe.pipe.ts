import { Pipe, PipeTransform } from '@angular/core';
import { Observable, scan } from 'rxjs';

@Pipe({
  name: 'scanPipe'
})
export class ScanPipePipe implements PipeTransform {

  transform(observableNumbers: Observable<any>): any {
    return observableNumbers.pipe(scan((acc, curr) => acc + curr, 0));
  }

}
