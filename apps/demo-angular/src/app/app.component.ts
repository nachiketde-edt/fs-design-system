import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsDsModule } from '@fs-ds/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FsDsModule],
  template: `
    <div class="container">
      <h1>FS Design System</h1>
      <p class="subtitle">Angular consumer demo</p>

      <div class="badges">
        <fs-badge-component variant="success">Angular 17</fs-badge-component>
        <fs-badge-component variant="info">Standalone</fs-badge-component>
        <fs-badge-component variant="default">&#64;fs-ds/angular</fs-badge-component>
      </div>

      @if (submitted()) {
        <div class="success-card">
          <fs-badge-component variant="success">Submitted!</fs-badge-component>
          <p>Email: <strong>{{ email }}</strong></p>
          <fs-button-component variant="ghost" (buttonClick)="reset()">Reset</fs-button-component>
        </div>
      } @else {
        <form (ngSubmit)="submit()" class="form">
          <fs-input-component
            label="Email address"
            type="email"
            placeholder="you@example.com"
            [(ngModel)]="email"
            name="email"
            [required]="true"
          ></fs-input-component>

          <div class="actions">
            <fs-button-component type="submit" variant="primary" [loading]="loading()">
              {{ loading() ? 'Submitting…' : 'Submit' }}
            </fs-button-component>
            <fs-button-component variant="secondary" type="button" (buttonClick)="email = ''">
              Clear
            </fs-button-component>
          </div>
        </form>
      }

      <hr />

      <section>
        <h2>All button variants</h2>
        <div class="buttons">
          <fs-button-component variant="primary">Primary</fs-button-component>
          <fs-button-component variant="secondary">Secondary</fs-button-component>
          <fs-button-component variant="ghost">Ghost</fs-button-component>
          <fs-button-component variant="danger">Danger</fs-button-component>
          <fs-button-component variant="primary" [disabled]="true">Disabled</fs-button-component>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .container { max-width: 480px; margin: 48px auto; padding: 0 16px; }
    h1 { font-size: var(--fs-text-2xl); font-weight: var(--fs-font-weight-bold); margin: 0 0 8px; }
    .subtitle { color: var(--fs-color-neutral-500); margin: 0 0 24px; }
    .badges { display: flex; gap: 8px; margin-bottom: 24px; }
    .form { display: flex; flex-direction: column; gap: 16px; }
    .actions { display: flex; gap: 8px; }
    .success-card { padding: 16px; background: var(--fs-color-success-light); border-radius: var(--fs-radius-lg); }
    .success-card p { margin: 8px 0; color: var(--fs-color-success-dark); }
    hr { margin: 40px 0; border-color: var(--fs-color-neutral-200); }
    h2 { font-size: var(--fs-text-lg); font-weight: var(--fs-font-weight-semibold); margin: 0 0 16px; }
    .buttons { display: flex; gap: 8px; flex-wrap: wrap; }
  `],
})
export class AppComponent {
  email = '';
  submitted = signal(false);
  loading = signal(false);

  async submit() {
    this.loading.set(true);
    await new Promise(r => setTimeout(r, 1200));
    this.loading.set(false);
    this.submitted.set(true);
  }

  reset() {
    this.email = '';
    this.submitted.set(false);
  }
}
