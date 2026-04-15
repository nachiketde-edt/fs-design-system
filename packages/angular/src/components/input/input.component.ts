import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import '@fs-ds/web-components/input';
import type { InputSize } from '@fs-ds/web-components';

/**
 * FsInputComponent — Angular wrapper for `<fs-input>`.
 * Implements ControlValueAccessor for Angular Forms compatibility.
 *
 * @example
 * <fs-input-component label="Email" [(ngModel)]="email" />
 * <!-- or with Reactive Forms: -->
 * <fs-input-component label="Email" [formControl]="emailCtrl" />
 */
@Component({
  selector: 'fs-input-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <fs-input
      [attr.label]="label"
      [attr.name]="name"
      [attr.type]="type"
      [attr.value]="value"
      [attr.placeholder]="placeholder"
      [attr.helper]="helper"
      [attr.size]="size"
      [attr.disabled]="disabled || null"
      [attr.required]="required || null"
      [attr.invalid]="invalid || null"
      (change)="handleChange($event)"
      (input)="handleInput($event)"
    ></fs-input>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FsInputComponent),
      multi: true,
    },
  ],
})
export class FsInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() name = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() helper = '';
  @Input() size: InputSize = 'md';
  @Input() disabled = false;
  @Input() required = false;
  @Input() invalid = false;

  @Output() valueChange = new EventEmitter<string>();

  value = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  handleChange(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
    this.onTouched();
    this.valueChange.emit(val);
  }

  handleInput(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.value = val;
    this.onChange(val);
  }

  // ControlValueAccessor
  writeValue(value: string) {
    this.value = value ?? '';
  }
  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
