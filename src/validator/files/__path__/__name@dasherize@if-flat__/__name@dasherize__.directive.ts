import { Directive } from '@angular/core';

@Directive({
  selector: '[<%= selector %>]',
  providers: [{ provide: NG_VALIDATORS, useExisting: <%= classify(name) %>Directive, multi: true }]
})
export class <%= classify(name) %>Directive implements Validator {

  constructor() {}

  validate(c: AbstractControl): { [key: string]: any } {
    return;
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
