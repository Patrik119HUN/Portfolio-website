import { Component, Input } from '@angular/core';
import { ProjectCard } from 'src/app/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() projectCard!: ProjectCard;
  Title = 'To-do app';
  Description = 'This is a simple task manager application for school project';
  Technologies = 'PHP, HTML, CSS , JAVASCRIPT';
}
