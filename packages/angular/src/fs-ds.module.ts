import { NgModule } from '@angular/core';
import { FsButtonComponent } from './components/button/button.component';
import { FsInputComponent } from './components/input/input.component';
import { FsBadgeComponent } from './components/badge/badge.component';

/**
 * FsDsModule — convenience NgModule that re-exports all FS Design System
 * Angular components. Import once in your AppModule or shared feature module.
 *
 * @example
 * // app.module.ts
 * import { FsDsModule } from '@fs-ds/angular';
 *
 * @NgModule({ imports: [FsDsModule] })
 * export class AppModule {}
 */
@NgModule({
  imports: [FsButtonComponent, FsInputComponent, FsBadgeComponent],
  exports: [FsButtonComponent, FsInputComponent, FsBadgeComponent],
})
export class FsDsModule {}
