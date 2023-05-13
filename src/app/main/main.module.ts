import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackVisibilityModule } from '../track-visibility/track-visibility.module';
import { HeroComponent } from './hero/hero.component';
import { WavebackgroundComponent } from './wavebackground/wavebackground.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [HeroComponent, WavebackgroundComponent, MainComponent],
  imports: [
    CommonModule,TrackVisibilityModule
  ],
  exports:[HeroComponent]
})
export class MainModule { }
