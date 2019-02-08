import { Directive } from '@angular/core';
import { AsyncValidator, ValidationErrors, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { map, catchError, take } from 'rxjs/operators';
import { AuthService } from '~core/services/auth.service';

@Directive({
  selector: '[coolUserExistsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: UserExistsValidatorDirective,
      multi: true,
    },
  ],
})
export class UserExistsValidatorDirective implements AsyncValidator {
  constructor(private service: AuthService) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log('UserExistsDirective', ctrl);
    return from(this.service.emailExists(ctrl.value)).pipe(
      map(isTaken => (isTaken ? { userExists: 'user already exists' } : null)),
      catchError(() => null)
    );
  }
}
