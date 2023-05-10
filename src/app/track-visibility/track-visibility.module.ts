import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackVisibility } from './TrackVisibility.directive';

@NgModule({
  declarations: [TrackVisibility],
  imports: [CommonModule],
  exports: [TrackVisibility],
})
export class TrackVisibilityModule {}
