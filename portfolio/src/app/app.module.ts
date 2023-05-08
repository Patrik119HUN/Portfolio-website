import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';

import { ProjectsModule } from './projects/projects.module';
import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ContactModule } from './contact/contact.module';
import { FooterComponent } from './footer/footer.component';

import { NavbarModule } from './navbar/navbar.module';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    AboutComponent,
    TechStackComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, ProjectsModule, ContactModule, AppRoutingModule,NavbarModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
