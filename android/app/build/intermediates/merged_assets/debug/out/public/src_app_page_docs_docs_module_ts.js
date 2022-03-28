"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_docs_docs_module_ts"],{

/***/ 6457:
/*!**************************************************!*\
  !*** ./src/app/page/docs/docs-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPageRoutingModule": () => (/* binding */ DocsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.page */ 822);




const routes = [
    {
        path: '',
        component: _docs_page__WEBPACK_IMPORTED_MODULE_0__.DocsPage
    }
];
let DocsPageRoutingModule = class DocsPageRoutingModule {
};
DocsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DocsPageRoutingModule);



/***/ }),

/***/ 5888:
/*!******************************************!*\
  !*** ./src/app/page/docs/docs.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPageModule": () => (/* binding */ DocsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs-routing.module */ 6457);
/* harmony import */ var _docs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.page */ 822);







let DocsPageModule = class DocsPageModule {
};
DocsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _docs_routing_module__WEBPACK_IMPORTED_MODULE_0__.DocsPageRoutingModule
        ],
        declarations: [_docs_page__WEBPACK_IMPORTED_MODULE_1__.DocsPage]
    })
], DocsPageModule);



/***/ }),

/***/ 822:
/*!****************************************!*\
  !*** ./src/app/page/docs/docs.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsPage": () => (/* binding */ DocsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _docs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.page.html?ngResource */ 7359);
/* harmony import */ var _docs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.page.scss?ngResource */ 1740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let DocsPage = class DocsPage {
    constructor() { }
    ngOnInit() {
    }
};
DocsPage.ctorParameters = () => [];
DocsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-docs',
        template: _docs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_docs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DocsPage);



/***/ }),

/***/ 1740:
/*!*****************************************************!*\
  !*** ./src/app/page/docs/docs.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7359:
/*!*****************************************************!*\
  !*** ./src/app/page/docs/docs.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <!-- Ícone do menu -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>Ajuda dos Documentos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_docs_docs_module_ts.js.map