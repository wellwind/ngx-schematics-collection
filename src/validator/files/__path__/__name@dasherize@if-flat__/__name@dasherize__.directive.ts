import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_<% if(isAsync) { %>ASYNC_<% } %>VALIDATORS, <% if(isAsync) { %>Async<% } %>Validator } from '@angular/forms';
<% if(isAsync) { %>import { Observable } from 'rxjs/Observable';<% } %>

@Directive({
  selector: '[<%= selector %>]',
  providers: [{ provide: NG_<% if(isAsync) { %>ASYNC_<% } %>VALIDATORS, useExisting: <%= classify(name) %>Directive, multi: true }]
})
export class <%= classify(name) %>Directive implements <% if(isAsync) { %>Async<% } %>Validator {

  constructor() {}
<% if(isAsync) { %>
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return null;
  }
<% } else { %>
  validate(c: AbstractControl): ValidationErrors | null {
    return null;
  }
<% } %>
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
}
