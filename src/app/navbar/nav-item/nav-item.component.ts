import { Component, Input } from '@angular/core';
import { NavItem } from 'src/app/nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent {
  @Input() navItem!: NavItem;
}
