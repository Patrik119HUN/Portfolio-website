import { Component } from '@angular/core';
import { NavItem } from 'src/app/nav-item';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navBarList: NavItem[] = [
    {
      name: 'Main',
      url: '#hero',
    },
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Technologies',
      url: '#stack',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ];
}
