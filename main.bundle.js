webpackJsonp([1,5],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppAboutComponent = (function () {
    function AppAboutComponent() {
    }
    AppAboutComponent.prototype.ngOnInit = function () {
    };
    return AppAboutComponent;
}());
AppAboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-app-about',
        template: __webpack_require__(580),
        styles: [__webpack_require__(570)]
    }),
    __metadata("design:paramtypes", [])
], AppAboutComponent);

//# sourceMappingURL=app-about.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(326);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMainComponent = (function () {
    function AppMainComponent(newsService) {
        this.newsService = newsService;
    }
    AppMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getAllNews()
            .then(function (news) {
            console.log(news);
            _this.news = news;
        });
    };
    return AppMainComponent;
}());
AppMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-app-main',
        template: __webpack_require__(583),
        styles: [__webpack_require__(573)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["d" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["d" /* NewsService */]) === "function" && _a || Object])
], AppMainComponent);

var _a;
//# sourceMappingURL=app-main.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(584),
        styles: [__webpack_require__(574)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(585),
        styles: [__webpack_require__(575)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_context_service__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * This service emulates an Authentication Service.
 */
var AuthService = (function () {
    function AuthService(userContextService, http) {
        this.userContextService = userContextService;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        this.loginUrl = '/login'; // URL to web api
    }
    AuthService.prototype.isAuthenticated = function () {
        return !!this.userContextService.userContext;
    };
    AuthService.prototype.authenticate = function (login) {
        console.log(login);
        return this.http
            .post(this.loginUrl, JSON.stringify(login), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.userContextService.userContext = undefined;
        this.userContextService.save();
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserContextService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_context_service__["a" /* UserContextService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(325);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_context_service__ = __webpack_require__(327);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__user_context_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_service__ = __webpack_require__(511);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__news_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__in_memory_data_service_service__ = __webpack_require__(510);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__in_memory_data_service_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserContextService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserContextService = (function () {
    function UserContextService() {
        this.userContext = null;
        this.load();
    }
    UserContextService.prototype.load = function () {
        try {
            var data = JSON.parse(sessionStorage.getItem('userContext'));
            return this.userContext = data;
        }
        catch (Error) { }
        return this;
    };
    UserContextService.prototype.save = function () {
        var str = JSON.stringify(this.userContext);
        sessionStorage.setItem('userContext', str);
    };
    return UserContextService;
}());
UserContextService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserContextService);

//# sourceMappingURL=user-context.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent.prototype.ngOnInit = function () {
    };
    return AppFooterComponent;
}());
AppFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-app-footer',
        template: __webpack_require__(581),
        styles: [__webpack_require__(571)]
    }),
    __metadata("design:paramtypes", [])
], AppFooterComponent);

//# sourceMappingURL=app-footer.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    return AppHeaderComponent;
}());
AppHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
        selector: 'app-app-header',
        template: __webpack_require__(582),
        styles: [__webpack_require__(572)]
    }),
    __metadata("design:paramtypes", [])
], AppHeaderComponent);

//# sourceMappingURL=app-header.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ui_router_ng2__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_states__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_config__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_footer_app_footer_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_header_app_header_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_main_app_main_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_about_app_about_component__ = __webpack_require__(321);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__app_footer_app_footer_component__["a" /* AppFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__app_header_app_header_component__["a" /* AppHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__app_main_app_main_component__["a" /* AppMainComponent */],
            __WEBPACK_IMPORTED_MODULE_14__app_about_app_about_component__["a" /* AppAboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5_ui_router_ng2__["UIRouterModule"].forRoot({
                states: __WEBPACK_IMPORTED_MODULE_6__app_states__["a" /* APP_STATES */],
                otherwise: { state: 'main' },
                useHash: true,
                config: __WEBPACK_IMPORTED_MODULE_7__router_config__["a" /* routerConfigFn */]
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__services__["a" /* InMemoryDataService */], { delay: 500 }),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__services__["c" /* UserContextService */], __WEBPACK_IMPORTED_MODULE_8__services__["d" /* NewsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ui_router_ng2__["UIView"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_main_app_main_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_about_app_about_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__(324);
/* unused harmony export appState */
/* unused harmony export loginState */
/* unused harmony export mainState */
/* unused harmony export aboutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_STATES; });




/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
var appState = {
    name: 'app',
    redirectTo: 'main',
    component: __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
};
var loginState = {
    name: 'login',
    url: '/login',
    component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
};
/*
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
var mainState = {
    parent: 'app',
    name: 'main',
    url: '/index',
    component: __WEBPACK_IMPORTED_MODULE_1__app_main_app_main_component__["a" /* AppMainComponent */]
};
var aboutState = {
    parent: 'app',
    name: 'about',
    url: '/about',
    component: __WEBPACK_IMPORTED_MODULE_2__app_about_app_about_component__["a" /* AppAboutComponent */]
};
var APP_STATES = [
    appState,
    loginState,
    aboutState,
    mainState
];
//# sourceMappingURL=app.states.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(325);
/* harmony export (immutable) */ __webpack_exports__["a"] = routerConfigFn;

function routerConfigFn(router) {
    var transitionService = router.transitionService;
    var requiresAuthCriteria = {
        to: function (state) { return state.data && state.data.requiresAuth; }
    };
    // Function that returns a redirect for the current transition to the login state
    // if the user is not currently authenticated (according to the AuthService)
    var redirectToLogin = function (transition) {
        var authService = transition.injector().get(__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]);
        var $state = transition.router.stateService;
        if (!authService.isAuthenticated()) {
            return $state.target('login', undefined, { location: false });
        }
    };
    // Register the "requires auth" hook with the TransitionsService
    transitionService.onBefore(requiresAuthCriteria, redirectToLogin, { priority: 10 });
}
//# sourceMappingURL=router.config.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var news = [
            {
                "Id": 1,
                "DateAdd": "2017-03-01 16:00:00",
                "Title": "Новость 1",
                "Content": "Подробности новости"
            },
            {
                "Id": 2,
                "DateAdd": "2017-03-02 17:00:00",
                "Title": "Новость 2",
                "Content": "Подробности новости"
            },
            {
                "Id": 3,
                "DateAdd": "2017-03-03 15:00:00",
                "Title": "Новость 3",
                "Content": "Подробности новости"
            }
        ];
        var users = [
            {
                "id": 1,
                "name": "user1",
                "surname": "surname1",
                "login": "login1"
            },
            {
                "id": 2,
                "name": "user2",
                "surname": "surname2",
                "login": "login2"
            },
            {
                "id": 3,
                "name": "user3",
                "surname": "surname3",
                "login": "login3"
            }
        ];
        return { news: news };
    };
    return InMemoryDataService;
}());
InMemoryDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])()
], InMemoryDataService);

//# sourceMappingURL=in-memory-data-service.service.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This service stores and retrieves user preferences in session storage
 */
var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.newsUrl = 'api/news';
    }
    NewsService.prototype.getAllNews = function () {
        return this.http.get(this.newsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h1 class=\"page-header\">Кратко о доме</h1>  \r\n</div>"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <div class=\"pull-right\">\r\n        10GB of <strong>250GB</strong> Free.\r\n    </div>\r\n    <div>\r\n        <strong>Copyright</strong> Example Company &copy; 2014-2015\r\n    </div>\r\n</div>"

/***/ }),

/***/ 582:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <img src=\"images/primary_196x69.svg\" class=\"navbar-brand\" alt=\"\"/>\r\n        </div>\r\n        <div class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li uiSrefActive=\"active\"><a uiSref=\"main\">Главная страница</a></li>\r\n                <li uiSrefActive=\"active\"><a uiSref=\"about\">О доме</a></li>                \r\n            </ul>            \r\n        </div><!--/.nav-collapse -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <h1 class=\"page-header\">Новости нашего дома</h1>\r\n  <div class=\"col-md-4\" *ngFor=\"let item of news\">\r\n    <h2 [innerHtml]=\"item.Title\"></h2>\r\n    <div [innerHtml]=\"item.Content\"></div>\r\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">Подробнее</a></p>\r\n  </div>  \r\n</div>"

/***/ }),

/***/ 584:
/***/ (function(module, exports) {

module.exports = "<app-app-header></app-app-header>\r\n\r\n<div class=\"container\">\r\n\r\n    <ui-view></ui-view>\r\n\r\n    <app-app-footer></app-app-footer>\r\n</div> <!-- /container -->\r\n\r\n"

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[663]);
//# sourceMappingURL=main.bundle.js.map