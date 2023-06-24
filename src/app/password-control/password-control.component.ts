import {Component, Input, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-control',
  templateUrl: './password-control.component.html',
  styleUrls: ['./password-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PasswordControlComponent,
    multi: true
  }]
})
export class PasswordControlComponent implements ControlValueAccessor{
  private _value: string = '';

  get value(): string {
    return this._value;
  }

  @Input()
  set value(val: string){
    this._value = val;
    this.onChange(this._value);
  }

  onChange = (value: any) => {};

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}

  onKey(event: any) {
    this.value = event.target.value;
  }
}
