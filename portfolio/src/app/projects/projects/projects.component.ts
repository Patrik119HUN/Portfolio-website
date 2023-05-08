import { Component } from '@angular/core';
import { ProjectCard } from 'src/app/project-card';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  ProjectList: ProjectCard[] = [
    {
      title: 'To-do app',
      description:
        'This is a simple task manager application for school project',
      technologies: 'PHP, HTML, CSS , JAVASCRIPT',
      url: 'https://github.com/Patrik119HUN/Kliens',
    },
    {
      title: 'Smart Home',
      description: 'Smart home controller for Home Assistant',
      technologies: 'C++, MQTT',
      url: 'https://github.com/Patrik119HUN/Home-OS',
    },

    {
      title: 'Photo Site',
      description:
        'My personal photograhy site with Shopify API and Sanity CMS',
      technologies: 'NEXTJS, SHOPIFY API, SANITY',
      url: 'https://github.com/Patrik119HUN/photo-site',
    },
  ];
}
