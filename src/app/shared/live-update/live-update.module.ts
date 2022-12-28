import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveUpdateComponent } from './live-update/live-update.component';

@NgModule({
  declarations: [LiveUpdateComponent],
  imports: [CommonModule],
  exports: [LiveUpdateComponent],
})
export class LiveUpdateModule {}
