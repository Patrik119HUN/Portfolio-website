import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './nav-item/nav-item.component';
import {NavbarComponent} from './navbar/navbar.component'


@NgModule({
  declarations: [
    NavItemComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
