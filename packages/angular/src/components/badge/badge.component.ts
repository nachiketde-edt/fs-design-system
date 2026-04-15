import {
  Component,
  Input,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import '@fs-ds/web-components/badge';
import type { BadgeVariant, BadgeSize } from '@fs-ds/web-components';

/**
 * FsBadgeComponent — Angular wrapper for `<fs-badge>`.
 *
 * @example
 * <fs-badge-component variant="success">Active</fs-badge-component>
 */
@Component({
  selector: 'fs-badge-component',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <fs-badge [attr.variant]="variant" [attr.size]="size">
      <ng-content />
    </fs-badge>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsBadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() size: BadgeSize = 'md';
}
