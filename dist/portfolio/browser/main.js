"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 6698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class AboutComponent {}
AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};
AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 6,
  vars: 0,
  consts: [["id", "about", 1, "flex", "flex-row", "w-full", "h-full", "dark:bg-Dark-cyan", "bg-Lime-green", "parallax"], [1, "mx-24", "my-auto"], [1, "font-fira-code", "dark:text-Light-green", "text-Very-Dark-cyan", "font-light", "text-[64px]"], [1, "font-light", "leading-10", "dark:text-Light-green", "font-fira-code", "text-Very-Dark-cyan", "text-[36px]"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " //ABOUT ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi. I\u2019m Tukacs Patrik. Computer Science engineer sudent at University of Szeged. I am ambitious in programming and i love trying my self in new challenges. Personally ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var ngx_cookie_service_ssr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service-ssr */ 7277);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects/projects/projects.component */ 7843);
/* harmony import */ var _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact/contact/contact.component */ 7051);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar/navbar.component */ 8333);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tech-stack/tech-stack.component */ 925);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 970);












function AppComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.changeTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AppComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.changeTheme());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    dark: a0
  };
};
class AppComponent {
  constructor(cookieService) {
    this.cookieService = cookieService;
    this.title = 'portfolio';
    this.isDarkEnable = false;
    this.presentTheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject('theme-light');
  }
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
    this.presentTheme$.value === 'theme-light' ? this.presentTheme$.next('theme-dark') : this.presentTheme$.next('theme-light');
    this.cookieService.set('theme', this.presentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_cookie_service_ssr__WEBPACK_IMPORTED_MODULE_9__.SsrCookieService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 11,
  vars: 5,
  consts: [[3, "ngClass"], ["mode-button", "", "style", "font-size: 30px", 3, "click", 4, "ngIf"], ["mode-button", "", 2, "font-size", "30px", 3, "click"], ["src", "assets/sun.svg", "alt", ""], ["src", "assets/moon.svg", "alt", ""]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "app-hero");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AppComponent_a_2_Template, 2, 0, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AppComponent_a_3_Template, 2, 0, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-about")(5, "app-projects")(6, "app-tech-stack")(7, "app-navbar")(8, "app-contact")(9, "app-footer")(10, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx.isDarkEnable));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isDarkEnable);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isDarkEnable);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _projects_projects_projects_component__WEBPACK_IMPORTED_MODULE_0__.ProjectsComponent, _contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _navbar_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_3__.HeroComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_5__.TechStackComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ 3229);
/* harmony import */ var _projects_projects_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects/projects.module */ 132);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 6698);
/* harmony import */ var _tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tech-stack/tech-stack.component */ 925);
/* harmony import */ var _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.module */ 5486);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.module */ 2775);
/* harmony import */ var ngx_cookie_service_ssr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service-ssr */ 7277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 6839);













class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [ngx_cookie_service_ssr__WEBPACK_IMPORTED_MODULE_10__.SsrCookieService, (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.provideClientHydration)()],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _projects_projects_module__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule, _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__.ContactModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__.NavbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__.HeroComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _tech_stack_tech_stack_component__WEBPACK_IMPORTED_MODULE_5__.TechStackComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _projects_projects_module__WEBPACK_IMPORTED_MODULE_3__.ProjectsModule, _contact_contact_module__WEBPACK_IMPORTED_MODULE_6__.ContactModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__.NavbarModule]
  });
})();

/***/ }),

/***/ 80:
/*!****************************************************************!*\
  !*** ./src/app/contact/contact-form/contact-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactFormComponent": () => (/* binding */ ContactFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emailjs/browser */ 7624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);





function ContactFormComponent_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name must!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-mail must!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Message must! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ContactFormComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Message sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ContactFormComponent {
  constructor(fb) {
    this.fb = fb;
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
    this.myForm.valueChanges.subscribe(console.log);
  }
  get email() {
    return this.myForm.get('email');
  }
  get name() {
    return this.myForm.get('name');
  }
  get message() {
    return this.myForm.get('message');
  }
  sendEmail(e) {
    e.preventDefault();
    _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__["default"].sendForm('service_ts4q8gk', 'template_2vfgp7b', e.target, 'Znb5BU-9C8V4EbUJQ').then(result => {
      console.log(result.text);
      this.myForm.reset();
      this.succes = true;
    }, error => {
      console.log(error.text);
    });
  }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) {
  return new (t || ContactFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder));
};
ContactFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContactFormComponent,
  selectors: [["app-contact-form"]],
  decls: 14,
  vars: 6,
  consts: [[1, "w-full", "h-full", 3, "formGroup", "ngSubmit"], [1, "flex", "flex-col", "h-full", "m-5", "justify-evenly"], [1, "w-full", "h-1/5"], ["type", "text", "required", "", "placeholder", "Your name", "formControlName", "name", "name", "name", 1, "w-full", "h-16", "text-xl"], ["class", "error", 4, "ngIf"], [1, "h-1/5"], ["type", "email", "placeholder", "Your e-mail addres", "required", "", "formControlName", "email", "name", "email", 1, "w-full", "h-16", "text-xl"], [1, "relative", "h-1/3"], ["type", "text", "placeholder", "Your message", "required", "", "formControlName", "message", "name", "message", 1, "w-full", "text-xl", "h-4/5"], ["type", "submit", 1, "w-1/4", "shadow-[0_0_0_10px]", "px-5", "shadow-Lime-green", "rounded-[10px]", "bg-Light-green", "h-16", "outline-0", "text-2xl", "text-Very-Dark-cyan", "transition-transform", "duration-300", "delay-75", "hover:-translate-y-2", 3, "disabled"], [1, "error"]],
  template: function ContactFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener($event) {
        return ctx.sendEmail($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ContactFormComponent_p_4_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContactFormComponent_p_7_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContactFormComponent_p_10_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Send! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ContactFormComponent_p_13_Template, 2, 0, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.myForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.name.invalid && ctx.name.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.invalid && ctx.message.touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.myForm.valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.succes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
  styles: ["input[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    border-radius: 10px;\r\n    --tw-bg-opacity: 1;\r\n    background-color: rgb(202 210 197 / var(--tw-bg-opacity));\r\n    padding-left: 1.25rem;\r\n    padding-right: 1.25rem;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(53 79 82 / var(--tw-text-opacity))\n}\r\ninput[_ngcontent-%COMP%]::placeholder, button[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder {\r\n    --tw-placeholder-opacity: 1;\r\n    color: rgb(82 121 111 / var(--tw-placeholder-opacity))\n}\r\ninput[_ngcontent-%COMP%], button[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    --tw-shadow: 0 0 0 10px;\r\n    --tw-shadow-colored: 0 0 0 10px var(--tw-shadow-color);\r\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\r\n    --tw-shadow-color: #84A98C;\r\n    --tw-shadow: var(--tw-shadow-colored);\r\n    outline-width: 0px\n}\r\n.error[_ngcontent-%COMP%] {\r\n    padding-top: 0.75rem;\r\n    padding-bottom: 0.75rem;\r\n    font-family: Fira code, monospace;\r\n    font-size: 1.125rem;\r\n    line-height: 1.75rem;\r\n    font-weight: 600;\r\n    --tw-text-opacity: 1;\r\n    color: rgb(185 28 28 / var(--tw-text-opacity))\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7OztJQUFBLG1CQUFvSTtJQUFwSSxrQkFBb0k7SUFBcEkseURBQW9JO0lBQXBJLHFCQUFvSTtJQUFwSSxzQkFBb0k7SUFBcEksb0JBQW9JO0lBQXBJO0FBQW9JO0FBQXBJOzs7SUFBQSwyQkFBb0k7SUFBcEk7QUFBb0k7QUFBcEk7OztJQUFBLHVCQUFvSTtJQUFwSSxzREFBb0k7SUFBcEksdUdBQW9JO0lBQXBJLDBCQUFvSTtJQUFwSSxxQ0FBb0k7SUFBcEk7QUFBb0k7QUFHcEk7SUFBQSxvQkFBNkQ7SUFBN0QsdUJBQTZEO0lBQTdELGlDQUE2RDtJQUE3RCxtQkFBNkQ7SUFBN0Qsb0JBQTZEO0lBQTdELGdCQUE2RDtJQUE3RCxvQkFBNkQ7SUFBN0Q7QUFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCxcclxuYnV0dG9uLFxyXG50ZXh0YXJlYSB7XHJcbiAgQGFwcGx5IHNoYWRvdy1bMF8wXzBfMTBweF0gcHgtNSBzaGFkb3ctTGltZS1ncmVlbiByb3VuZGVkLVsxMHB4XSBiZy1MaWdodC1ncmVlbiAgb3V0bGluZS0wIHRleHQtVmVyeS1EYXJrLWN5YW4gcGxhY2Vob2xkZXItRGFyay1jeWFuO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgQGFwcGx5IHB5LTMgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtcmVkLTcwMCBmb250LWZpcmEtY29kZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5486:
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactModule": () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact/contact.component */ 7051);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-form/contact-form.component */ 80);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);





class ContactModule {}
ContactModule.ɵfac = function ContactModule_Factory(t) {
  return new (t || ContactModule)();
};
ContactModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ContactModule
});
ContactModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent, _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_1__.ContactFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
    exports: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent]
  });
})();

/***/ }),

/***/ 7051:
/*!******************************************************!*\
  !*** ./src/app/contact/contact/contact.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-form/contact-form.component */ 80);


class ContactComponent {}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)();
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 7,
  vars: 0,
  consts: [["id", "contact", 1, "flex", "flex-col", "items-center", "justify-between", "w-full", "h-screen", "px-10", "bg-Very-Dark-cyan"], [1, "flex", "flex-row", "items-center", "justify-center", "w-full", "gap-6", "my-auto"], [1, "flex", "flex-col"], [1, "font-fira-code", "text-Light-green", "font-light", "text-[64px]"], ["src", "assets/Contact.png", "alt", ""], [1, "w-1/3", "h-full"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \\\\Contact me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-contact-form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_0__.ContactFormComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class FooterComponent {}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  decls: 27,
  vars: 0,
  consts: [[1, "flex", "flex-col", "gap-2", "p-10", "px-24", "bg-Grayish-blue", "font-fira-code", "text-Light-green"], [1, "flex", "flex-row", "gap-5"], [1, "flex", "flex-row", "gap-3"], ["href", "#hero"], ["href", "#about"], ["href", "#projects"], ["href", "#stack"], ["href", "#contact"], ["href", ""]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Page content:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hero");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Stack");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Photography site");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1)(18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Social media:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Github");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A9 2023 by Tukacs Patrik. All rights reserved");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3229:
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroComponent": () => (/* binding */ HeroComponent)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ 2845);
/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ 7456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);



const _c0 = [[["", "mode-button", ""]]];
const _c1 = ["[mode-button]"];
class HeroComponent {
  constructor() {
    this.Planematerial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
      color: 0x14ac00,
      side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide
    });
  }
  ngOnInit() {
    this.createThreeJsBox();
  }
  createThreeJsBox() {
    const canvas = document.getElementById('canvas-box');
    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0x2f3e46);
    scene.add(ambientLight);
    const pointLight = new three__WEBPACK_IMPORTED_MODULE_1__.PointLight(0xeeeeee, 1, 100);
    pointLight.position.set(0, 20, -20);
    scene.add(pointLight);
    let geometry, material, plane;
    createPlane();
    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.001, 1000);
    camera.position.z = 7;
    camera.position.y = 10;
    camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 3, 0));
    scene.add(camera);
    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({
      canvas: canvas,
      antialias: true
    });
    renderer.setClearColor(0xe232222, 1);
    renderer.setSize(window.innerWidth, window.outerHeight, false);
    var noise4D = (0,simplex_noise__WEBPACK_IMPORTED_MODULE_0__.createNoise4D)();
    const animate = function () {
      for (var i = 0; i < geometry.getAttribute('position').count; i++) {
        var z = i + Date.now() * 8 / 100000;
        geometry.getAttribute('position').setZ(i, noise4D(z, z, z, z) * 7);
        geometry.getAttribute('position').needsUpdate = true;
        plane.updateMatrix();
      }
      plane.rotation.x = Math.PI / 2;
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
    function createPlane() {
      geometry = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(400, 400, 75, 75);
      material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshLambertMaterial({
        color: 0x14ac00,
        side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide
      });
      plane = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry, material);
      scene.add(plane);
      plane.rotation.x = Math.PI / 2;
    }
    /***RESIZE***/
    window.addEventListener('resize', () => {
      document.querySelector('canvas').style.width = window.innerWidth + 'px';
      document.querySelector('canvas').style.height = window.outerHeight + 'px';
      renderer.setSize(window.innerWidth, window.outerHeight, false);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) {
  return new (t || HeroComponent)();
};
HeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeroComponent,
  selectors: [["app-hero"]],
  ngContentSelectors: _c1,
  decls: 23,
  vars: 0,
  consts: [["id", "canvas-box", 1, "absolute", "top-0", "-z-10", "blur-sm"], ["id", "hero", 1, "flex", "flex-row", "justify-between", "h-screen", "p-10"], [1, "text-5xl", "left-6", "text-Lime-green", "dark:text-Very-Dark-cyan", "font-fira-code", "w-fit"], [1, "absolute", "z-10", "flex", "flex-row", "items-center", "px-24", "-translate-y-2/3", "top-1/2", "w-max"], [1, "relative"], ["src", "assets/hi.png", "alt", "", 1, "w-[375px]", "mx-5", "aspect-square", "z-10"], ["src", "assets/Vector.svg ", "alt", "", 1, "absolute", "align-middle", "inset-y-1/2", "left-[15%]", "-z-10"], [1, "flex", "flex-col"], [1, "text-[64px]", "font-semibold", "text-Lime-green", "font-fira-code", "leading-[79px]"], [1, "text-4xl", "font-fira-code", "text-Lime-green"], [1, "flex", "flex-row", "gap-5", "mt-5"], ["href", "https://github.com/Patrik119HUN", "target", "_blank"], ["src", "assets/stack/github.svg", "alt", "", 1, "w-16", "greenSVG"], ["href", "https://www.instagram.com/tukacs_patrik/", "target", "_blank"], ["src", "assets/instagram.svg", "alt", "", 1, "w-16", "greenSVG"]],
  template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Tukacs Patrik_ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 5)(8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "h1", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Hi! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " I'm Tukacs Patrik ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Web developer, programmer and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " computer science engineer student. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 10)(19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 946:
/*!*******************************************************!*\
  !*** ./src/app/navbar/nav-item/nav-item.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavItemComponent": () => (/* binding */ NavItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class NavItemComponent {}
NavItemComponent.ɵfac = function NavItemComponent_Factory(t) {
  return new (t || NavItemComponent)();
};
NavItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavItemComponent,
  selectors: [["app-nav-item"]],
  inputs: {
    navItem: "navItem"
  },
  decls: 4,
  vars: 2,
  consts: [[1, "flex", "flex-row", "items-center", "gap-3", "group", 3, "href"], [1, "inline-block", "w-12", "h-12", "p-6", "transition-all", "rotate-45", "border-2", "rounded-md", "border-Dark-cyan", "group-hover:rotate-0", "group-hover:bg-Dark-cyan"], [1, "relative", "left-0", "text-3xl", "transition-all", "opacity-0", "group-hover:opacity-100", "font-fira-code", "text-Dark-cyan"]],
  template: function NavItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.navItem.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.navItem.name, " ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2775:
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": () => (/* binding */ NavbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-item/nav-item.component */ 946);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 8333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);




class NavbarModule {}
NavbarModule.ɵfac = function NavbarModule_Factory(t) {
  return new (t || NavbarModule)();
};
NavbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: NavbarModule
});
NavbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NavbarModule, {
    declarations: [_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_0__.NavItemComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent]
  });
})();

/***/ }),

/***/ 8333:
/*!***************************************************!*\
  !*** ./src/app/navbar/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav-item/nav-item.component */ 946);



function NavbarComponent_app_nav_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav-item", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navItem", item_r1);
  }
}
class NavbarComponent {
  constructor() {
    this.navBarList = [{
      name: 'Main',
      url: '#hero'
    }, {
      name: 'About',
      url: '#about'
    }, {
      name: 'Projects',
      url: '#projects'
    }, {
      name: 'Technologies',
      url: '#stack'
    }, {
      name: 'Contact',
      url: '#contact'
    }];
  }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 2,
  vars: 1,
  consts: [[1, "fixed", "left-0", "z-50", "flex", "flex-col", "gap-5", "inset-y-1/2", "mx-11"], [3, "navItem", 4, "ngFor", "ngForOf"], [3, "navItem"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavbarComponent_app_nav_item_1_Template, 1, 1, "app-nav-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navBarList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_0__.NavItemComponent],
  styles: [".nav[_ngcontent-%COMP%]:hover::after {\r\n  content: \"Contact\";\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdjpob3Zlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiQ29udGFjdFwiO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5705:
/*!*****************************************************************!*\
  !*** ./src/app/projects/project-card/project-card.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectCardComponent": () => (/* binding */ ProjectCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class ProjectCardComponent {
  constructor() {
    this.Title = 'To-do app';
    this.Description = 'This is a simple task manager application for school project';
    this.Technologies = 'PHP, HTML, CSS , JAVASCRIPT';
  }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) {
  return new (t || ProjectCardComponent)();
};
ProjectCardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProjectCardComponent,
  selectors: [["app-project-card"]],
  inputs: {
    projectCard: "projectCard"
  },
  decls: 12,
  vars: 4,
  consts: [[1, "bg-Light-green", "border-[10px]", "border-Lime-green", "aspect-square", "w-[402px]", "rounded-[10px]", "relative", "shadow-black", "shadow-[10px_10px_0px_#000000]"], [1, "px-4", "pt-4", "pb-[28px]", "flex", "flex-row", "align-baseline", "gap-[20px]"], ["src", "assets/file.svg", "alt", "", 1, "h-[50px]"], [1, "text-[42px]", "font-semibold", "text-Lime-green", "font-fira-code", "leading-[49px]"], [1, "font-fira-code", "px-4", "text-Lime-green", "font-[450]", "text-3xl", "leading-[39px]"], [1, "absolute", "bottom-0", "flex", "flex-row", "items-baseline", "justify-between", "w-full", "px-4", "pb-2"], [1, "font-mono", "text-base", "font-normal", "leading-5", "opacity-75", "text-Lime-green"], ["target", "_blank", 3, "href"], ["src", "assets/github-mark.svg", "alt", "", 1, "h-12", "greenSVG"]],
  template: function ProjectCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectCard.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectCard.description, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.projectCard.technologies, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.projectCard.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    }
  },
  styles: [".greenSVG[_ngcontent-%COMP%] {\r\n  filter: invert(68%) sepia(23%) saturate(347%) hue-rotate(81deg)\r\n    brightness(91%) contrast(84%);\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1jYXJkL3Byb2plY3QtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7aUNBQytCO0FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZWVuU1ZHIHtcclxuICBmaWx0ZXI6IGludmVydCg2OCUpIHNlcGlhKDIzJSkgc2F0dXJhdGUoMzQ3JSkgaHVlLXJvdGF0ZSg4MWRlZylcclxuICAgIGJyaWdodG5lc3MoOTElKSBjb250cmFzdCg4NCUpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 132:
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsModule": () => (/* binding */ ProjectsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-card/project-card.component */ 5705);
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ 7843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);




class ProjectsModule {}
ProjectsModule.ɵfac = function ProjectsModule_Factory(t) {
  return new (t || ProjectsModule)();
};
ProjectsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ProjectsModule
});
ProjectsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProjectsModule, {
    declarations: [_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCardComponent, _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__.ProjectsComponent]
  });
})();

/***/ }),

/***/ 7843:
/*!*********************************************************!*\
  !*** ./src/app/projects/projects/projects.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectsComponent": () => (/* binding */ ProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project-card/project-card.component */ 5705);



function ProjectsComponent_app_project_card_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-project-card", 5);
  }
  if (rf & 2) {
    const projects_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("projectCard", projects_r1);
  }
}
class ProjectsComponent {
  constructor() {
    this.ProjectList = [{
      title: 'To-do app',
      description: 'This is a simple task manager application for school project',
      technologies: 'PHP, HTML, CSS , JAVASCRIPT',
      url: 'https://github.com/Patrik119HUN/Kliens'
    }, {
      title: 'Smart Home',
      description: 'Smart home controller for Home Assistant',
      technologies: 'C++, MQTT',
      url: 'https://github.com/Patrik119HUN/Home-OS'
    }, {
      title: 'Photo Site',
      description: 'My personal photograhy site with Shopify API and Sanity CMS',
      technologies: 'NEXTJS, SHOPIFY API, SANITY',
      url: 'https://github.com/Patrik119HUN/photo-site'
    }];
  }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
  return new (t || ProjectsComponent)();
};
ProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProjectsComponent,
  selectors: [["app-projects"]],
  decls: 6,
  vars: 1,
  consts: [["id", "projects", 1, "flex", "w-full", "h-screen", "bg-Very-Dark-cyan"], [1, "flex", "flex-col", "items-center", "m-auto"], [1, "font-fira-code", "text-Light-green", "font-light", "text-[64px]"], [1, "flex", "flex-row", "gap-24", "mx-auto"], [3, "projectCard", 4, "ngFor", "ngForOf"], [3, "projectCard"]],
  template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " //My Projects ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProjectsComponent_app_project_card_5_Template, 1, 1, "app-project-card", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ProjectList);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_0__.ProjectCardComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 925:
/*!****************************************************!*\
  !*** ./src/app/tech-stack/tech-stack.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TechStackComponent": () => (/* binding */ TechStackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6839);

class TechStackComponent {}
TechStackComponent.ɵfac = function TechStackComponent_Factory(t) {
  return new (t || TechStackComponent)();
};
TechStackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TechStackComponent,
  selectors: [["app-tech-stack"]],
  decls: 21,
  vars: 0,
  consts: [["id", "stack", 1, "flex", "w-full", "h-screen", "bg-Lime-green"], [1, "m-auto"], [1, "font-fira-code", "text-Very-Dark-cyan", "font-light", "text-[64px]"], [1, "grid", "darkGreenSVG"], ["src", "assets/stack/cplusplus.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/arduino.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/java.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/php.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/angularjs.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/html5.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/tailwindcss.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/nextjs.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/typescript.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/nodejs.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/npm.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/ubuntu.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/github.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/vim.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/vscode.svg", "alt", "", 1, "w-32"], ["src", "assets/stack/threejs.svg", "alt", "", 1, "w-32"]],
  template: function TechStackComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " //Technologies i\u2019m familiar with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4)(6, "img", 5)(7, "img", 6)(8, "img", 7)(9, "img", 8)(10, "img", 9)(11, "img", 10)(12, "img", 11)(13, "img", 12)(14, "img", 13)(15, "img", 14)(16, "img", 15)(17, "img", 16)(18, "img", 17)(19, "img", 18)(20, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 2512);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map