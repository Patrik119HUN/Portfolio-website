import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ProjectsModule } from './projects/projects.module';
@NgModule({
  declarations: [AppComponent, HeroComponent, NavbarComponent],
  imports: [BrowserModule, ProjectsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
