import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectsModule } from './projects/projects.module';
import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ContactModule } from './contact/contact.module';
import { FooterComponent } from './footer/footer.component';

import { NavbarModule } from './navbar/navbar.module';
import { SsrCookieService } from 'ngx-cookie-service-ssr';

import { provideClientHydration } from '@angular/platform-browser';
import { TrackVisibilityModule } from './track-visibility/track-visibility.module';
import { MainModule } from './main/main.module';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TechStackComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ProjectsModule,
    ContactModule,
    AppRoutingModule,
    NavbarModule,
    TrackVisibilityModule,
    MainModule,
  ],
  providers: [SsrCookieService, provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
