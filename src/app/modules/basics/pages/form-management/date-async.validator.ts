
import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { WebServerService } from '../../../../core/services/web-services/web-server.service';

export class CustomDateValidator {
  static createValidator(webserverService: WebServerService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return webserverService.validateDate(control.value).pipe(
        map((result: boolean) => result ? null : {invalidAsync: true})
      );
    };
  }
}