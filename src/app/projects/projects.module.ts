import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [ProjectCardComponent, ProjectsComponent],
  imports: [CommonModule],
  exports:[ProjectsComponent]
})
export class ProjectsModule {}
