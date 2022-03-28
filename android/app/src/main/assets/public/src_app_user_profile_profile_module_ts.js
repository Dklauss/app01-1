"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_user_profile_profile_module_ts"],{

/***/ 3565:
/*!********************************************************!*\
  !*** ./src/app/user/profile/profile-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 5109);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 6301:
/*!************************************************!*\
  !*** ./src/app/user/profile/profile.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 3565);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 5109);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 5109:
/*!**********************************************!*\
  !*** ./src/app/user/profile/profile.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 8701);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 5371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);




// Importa dependências

let ProfilePage = class ProfilePage {
    constructor(
    // Injeta dependências
    auth) {
        this.auth = auth;
    }
    ngOnInit() {
        // Verifica se esta logado
        this.auth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 5371:
/*!***********************************************************!*\
  !*** ./src/app/user/profile/profile.page.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".ion-date {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1kYXRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8701:
/*!***********************************************************!*\
  !*** ./src/app/user/profile/profile.page.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <!-- Ícone do menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Perfil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\" *ngIf=\"auth.user | async as user\">\n\n  <ion-card>\n    <div class=\"ion-text-center\">\n      <img src=\"{{ user.photoURL }}\" referrerpolicy=\"no-referrer\" alt=\"{{ user.displayName }}\">\n    </div>\n    <ion-card-header>\n      <ion-card-title>{{ user.displayName }}</ion-card-title>\n      <ion-card-subtitle>{{ user.email }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n\n      <ul>\n        <li>\n          <strong>Data do cadastro:</strong>\n        </li>\n        <ul>\n          <li>{{ userData.metadata.createdAt | date: 'dd/MM/yyyy' }} às {{ userData.metadata.createdAt | date: 'HH:mm' }}</li>\n        </ul>\n        <li><strong>Último acesso:</strong></li>\n        <ul>\n          <li>{{ userData.metadata.lastLoginAt | date: 'dd/MM/yyyy' }} às {{ userData.metadata.lastLoginAt | date: 'HH:mm' }}</li>\n        </ul>\n      </ul>\n\n      <p class=\"ion-margin-bottom\">Seu perfil é mantido pelo Google. Clique no botão abaixo para acessá-lo:</p>\n\n      <ion-button class=\"ion-margin-bottom ion-margin-top\" expand=\"block\" href=\"https://myaccount.google.com/\" target=\"_blank\">Ver / Editar perfil</ion-button>\n\n      <p>Clique no botão abaixo para fazer 'logout'.</p>\n\n      <ion-button class=\"ion-margin-top\" expand=\"block\" color=\"danger\" routerLink=\"/usuario/logout\">\n        <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>Logout / Sair\n      </ion-button>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_user_profile_profile_module_ts.js.map