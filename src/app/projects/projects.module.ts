import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { TrackVisibilityModule } from '../track-visibility/track-visibility.module';

@NgModule({
  declarations: [ProjectCardComponent, ProjectsComponent],
  imports: [CommonModule, TrackVisibilityModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
