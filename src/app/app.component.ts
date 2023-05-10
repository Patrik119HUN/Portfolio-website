import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SsrCookieService } from 'ngx-cookie-service-ssr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';
  visibilityArray = [false, false, false, false, false];
  isDarkEnable = false;
  presentTheme$ = new BehaviorSubject<string>('theme-light');
  constructor(private cookieService: SsrCookieService) {}
  ngOnInit() {
    const savedTheme = this.cookieService.get('theme');
    if (savedTheme) {
      this.presentTheme$.next(savedTheme);
    }

    console.log(this.presentTheme$.value);
    if (this.presentTheme$.value === 'theme-light') {
      this.isDarkEnable = false;
    } else {
      this.isDarkEnable = true;
    }
  }
  changeTheme() {
    this.presentTheme$.value === 'theme-light'
      ? this.presentTheme$.next('theme-dark')
      : this.presentTheme$.next('theme-light');
    this.cookieService.set('theme', this.presentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }
  changeState(e,i) {
    this.visibilityArray[i] = e;
  }
}
