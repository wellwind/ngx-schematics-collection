import { NG_VALUE_ACCESSOR,  } from '@angular/forms';
import { Component, OnInit, Input<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%>, forwardRef } from '@angular/core';

export const <%= underscore(name).toUpperCase() %>_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => <%= classify(name) %>Component),
  multi: true
};

@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `
    <p>
      <%= dasherize(name) %> works!
    </p>
  `,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>,
  providers: [<%= underscore(name).toUpperCase() %>_VALUE_ACCESSOR]
})
export class <%= classify(name) %>Component implements OnInit, ControlValueAccessor {

  private _value: any;

  set value(value: any) {
    this._value = value;
    this.notifyValueChange();
  }

  get value() {
    return this._value;
  }

  private _isDisabled: boolean;

  @Input()
  get disabled(): boolean {
    return this._isDisabled;
  }

  set disabled(value: boolean) {
    this._isDisabled = value;
  }

  onChange: (value) => {};
  onTouched: () => {};

  constructor() { }

  notifyValueChange() {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  ngOnInit() { }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
