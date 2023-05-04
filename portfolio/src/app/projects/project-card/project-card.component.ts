import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  Title = "To-do app"
  Description = "This is a simple task manager application for school project"
  Technologies = "PHP, HTML, CSS , JAVASCRIPT"
}
