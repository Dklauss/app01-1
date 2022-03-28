"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_logout_logout_module_ts"],{

/***/ 1771:
/*!******************************************************!*\
  !*** ./src/app/user/logout/logout-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageRoutingModule": () => (/* binding */ LogoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.page */ 615);




const routes = [
    {
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_0__.LogoutPage
    }
];
let LogoutPageRoutingModule = class LogoutPageRoutingModule {
};
LogoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LogoutPageRoutingModule);



/***/ }),

/***/ 7636:
/*!**********************************************!*\
  !*** ./src/app/user/logout/logout.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPageModule": () => (/* binding */ LogoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout-routing.module */ 1771);
/* harmony import */ var _logout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page */ 615);







let LogoutPageModule = class LogoutPageModule {
};
LogoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LogoutPageRoutingModule
        ],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_1__.LogoutPage]
    })
], LogoutPageModule);



/***/ }),

/***/ 615:
/*!********************************************!*\
  !*** ./src/app/user/logout/logout.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutPage": () => (/* binding */ LogoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _logout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.page.html?ngResource */ 1186);
/* harmony import */ var _logout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.page.scss?ngResource */ 7813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




// Importa dependências


let LogoutPage = class LogoutPage {
    constructor(
    // Injeta dependências
    auth, route) {
        this.auth = auth;
        this.route = route;
    }
    ngOnInit() { }
    // Função de logout
    logout() {
        this.auth.signOut()
            // Quando fizer logout...
            .then(() => {
            // Envia para a página inicial
            this.route.navigate(['/inicio']);
        });
    }
};
LogoutPage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
LogoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-logout',
        template: _logout_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_logout_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogoutPage);



/***/ }),

/***/ 7813:
/*!*********************************************************!*\
  !*** ./src/app/user/logout/logout.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "div ion-icon {\n  font-size: 128px;\n  color: orangered;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoibG9nb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxMjhweDtcclxuICBjb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 1186:
/*!*********************************************************!*\
  !*** ./src/app/user/logout/logout.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <!-- Ícone para voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/usuario/perfil\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Logout / Sair</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <div class=\"ion-text-center\">\n    <ion-icon name=\"log-out\"></ion-icon>\n  </div>\n  <p><strong>Tem certeza que deseja sair do aplicativo?</strong></p>\n  <p>Se sair, precisará logar-se novamente para ter acesso ao conteúdo exclusivo.</p>\n\n  <ion-button expand=\"block\" (click)=\"logout()\" color=\"danger\">\n    <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n    Logout / Sair\n  </ion-button>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user_logout_logout_module_ts.js.map