import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import '@fs-ds/web-components/button';
import type { ButtonVariant, ButtonSize } from '@fs-ds/web-components';

/**
 * FsButtonComponent — Angular wrapper for `<fs-button>`.
 *
 * @example
 * <fs-button-component variant="primary" size="md" (buttonClick)="onSave()">
 *   Save
 * </fs-button-component>
 */
@Component({
  selector: 'fs-button-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <fs-button
      [attr.variant]="variant"
      [attr.size]="size"
      [attr.disabled]="disabled || null"
      [attr.loading]="loading || null"
      [attr.type]="type"
      (click)="handleClick($event)"
    >
      <ng-content select="[slot=icon-left]" />
      <ng-content />
      <ng-content select="[slot=icon-right]" />
    </fs-button>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsButtonComponent implements OnInit {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  ngOnInit() {
    // Ensure custom element is registered
  }

  handleClick(event: MouseEvent) {
    if (!this.disabled && !this.loading) {
      this.buttonClick.emit(event);
    }
  }
}
