import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { NavItem } from 'src/app/nav-item';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck, OnInit {
  @Input() visibilityArray: boolean[];
  navBarList: NavItem[];
  ngOnInit(): void {
    this.navBarList = [
      {
        name: 'Main',
        url: '#hero',
        isVisible: false,
      },
      {
        name: 'About',
        url: '#about',
        isVisible: false,
      },
      {
        name: 'Projects',
        url: '#projects',
        isVisible: false,
      },
      {
        name: 'Technologies',
        url: '#stack',
        isVisible: false,
      },
      {
        name: 'Contact',
        url: '#contact',
        isVisible: false,
      },
    ];
  }
  ngDoCheck() {
    this.visibilityArray.forEach((e, i) => (this.navBarList[i].isVisible = e));
  }
}
