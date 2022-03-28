"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_page_view_view_module_ts"],{

/***/ 5878:
/*!**************************************************!*\
  !*** ./src/app/page/view/view-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageRoutingModule": () => (/* binding */ ViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page */ 232);




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ 8021:
/*!******************************************!*\
  !*** ./src/app/page/view/view.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageModule": () => (/* binding */ ViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-routing.module */ 5878);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page */ 232);







let ViewPageModule = class ViewPageModule {
};
ViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPageRoutingModule
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_1__.ViewPage]
    })
], ViewPageModule);



/***/ }),

/***/ 232:
/*!****************************************!*\
  !*** ./src/app/page/view/view.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPage": () => (/* binding */ ViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page.html?ngResource */ 9925);
/* harmony import */ var _view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page.scss?ngResource */ 3024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ 6369);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ 1866);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);




// Importa dependências







let ViewPage = class ViewPage {
    constructor(
    // Injeta dependências
    activatedRoute, route, auth, alertController) {
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.auth = auth;
        this.alertController = alertController;
        // Conexão com o Firebase
        this.app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_2__.initializeApp)(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.firebase);
        // Conexão com o banco de dadosKw
        this.db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getFirestore)();
        // Armazena comentários
        this.comment = '';
        this.comments = [];
    }
    // 'ngOnInit()' deve ser 'async' por causa do 'await' usado logo abaixo!
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // Obtém o ID do artigo a ser exibido, da rota (URL)
            this.id = this.activatedRoute.snapshot.paramMap.get('id');
            // Obtém o artigo inteiro à partir do ID deste
            const myArt = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.db, 'manual', this.id));
            // Se o artigo foi encontrado...
            if (myArt.exists()) {
                // Armazena o artigo em 'art'
                this.art = myArt.data();
                // Incrementa 'views' do artigo
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(this.db, 'manual', this.id), {
                    views: (parseInt(this.art.views, 10) + 1).toString()
                });
                // Conecta ao banco de dados e obtém todos os comentários deste artigo
                (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.db, 'comment'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('article', '==', this.id), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.where)('status', '==', 'on'), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)('date', 'desc')), (myComments) => {
                    // Limpa a lista de manuais para carregar novamente.
                    this.comments = [];
                    // Loop que itera cada faq obtida
                    myComments.forEach((myDoc) => {
                        // Armazena dados na variável 'faq'
                        const myComment = myDoc.data();
                        // Adiciona conteúdo de 'faq' em 'faqs' para ser usado na view
                        this.comments.push(myComment);
                    });
                });
                // Se não foi encontrado...
            }
            else {
                // Volta para a lista de artigos
                this.route.navigate(['/usuarios']);
            }
            // Verifica se tem usuario logado
            this.auth.authState.subscribe(user => {
                if (user) {
                    // Armazena os dados do usuário em 'this.user'
                    this.userData = user;
                }
            });
        });
    }
    // Salva comentários no banco de dados
    sendComment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /**
             * Sanitiza comentário, se necessário
             * Retirado do 'MyDocsApp' original:
             *     https://github.com/Luferat/MyDocsApp/blob/20220119_01/global.js
             */
            this.comment = this.comment.replace(/<[^>]*>?/gm, '');
            this.comment = this.comment.replace(/\n/g, '<br>').trim();
            this.comment = this.comment.trim();
            // Se existe comentário...
            if (this.comment !== '') {
                /**
                 * Data de hoje, formatada.
                 * Retirado do 'MyDocsApp' original:
                 *     https://github.com/Luferat/MyDocsApp/blob/20220119_01/global.js
                 */
                const yourDate = new Date();
                const now = yourDate.toISOString().replace('T', ' ').split('.')[0];
                // Formata dados para salvar no database
                const commentData = {
                    name: this.userData.displayName,
                    email: this.userData.email,
                    photo: this.userData.photoURL,
                    uid: this.userData.uid,
                    date: now,
                    article: this.id,
                    comment: this.comment,
                    status: 'on' // Status do comentário
                };
                // Tenta armazenar o comentário em um novo documento da coleção 'comment'
                try {
                    const docRef = yield (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(this.db, 'comment'), commentData);
                    // Se deu certo, exibe alerta para o usuário
                    this.presentAlert();
                    // Limpa o campo para um novo comentário
                    this.comment = '';
                    // Se de errado...
                }
                catch (e) {
                    // Exibe mensagem de erro no console.
                    console.error('Erro ao adicionar documento: ', e);
                }
            }
            else {
                // Se não existe comentário, sai sem fazer nada.
                return false;
            }
        });
    }
    // Caixa de alerta --> https://ionicframework.com/docs/api/alert
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Oba!',
                message: 'Seu comentário foi enviado com sucesso.',
                buttons: ['Ok']
            });
            yield alert.present();
        });
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
ViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-view',
        template: _view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewPage);



/***/ }),

/***/ 3024:
/*!*****************************************************!*\
  !*** ./src/app/page/view/view.page.scss?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".date-time {\n  display: block;\n  text-align: right;\n}\n\nion-img {\n  max-width: 300px;\n  margin: auto;\n}\n\nion-textarea {\n  border: 1px dotted grey;\n  border-radius: 0.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUVFLHVCQUFBO0VBQ0EscUJBQUE7QUFBRiIsImZpbGUiOiJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXRlLXRpbWUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaW9uLXRleHRhcmVhIHtcclxuXHJcbiAgYm9yZGVyOiAxcHggZG90dGVkIGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 9925:
/*!*****************************************************!*\
  !*** ./src/app/page/view/view.page.html?ngResource ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <!-- Ícone para voltar -->\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/usuarios\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Artigo completo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"art\">\n\n  <div class=\"ion-text-center\">\n    <ion-img src=\"{{ art.image }}\"></ion-img>\n  </div>\n\n  <h2 class=\"ion-text-center\">{{ art.title }}</h2>\n  <small class=\"date-time\">{{ art.date | date :'d/m/Y' }} às {{ art.date | date :'H:mm'}}.</small>\n  <div [innerHTML]=\"art.body\"></div>\n\n  <ion-button class=\"ion-margin-top\" routerLink=\"/usuarios\">\n    <ion-icon name=\"arrow-back\" slot=\"start\"></ion-icon>\n    Voltar\n  </ion-button>\n\n  <ion-item-divider class=\"ion-margin-bottom\"></ion-item-divider>\n\n  <div *ngIf=\"auth.user | async as user; else showLogin\">\n    <ion-label>Deixe seu comentário:</ion-label>\n    <ion-textarea [(ngModel)]=\"comment\" auto-grow></ion-textarea>\n    <ion-button (click)=\"sendComment()\">Enviar</ion-button>\n  </div>\n\n  <ng-template #showLogin>\n    <ion-button routerLink=\"/usuario/login\">\n      <ion-icon name=\"log-in\" slot=\"start\"></ion-icon>\n      Logue-se para comentar\n    </ion-button>\n  </ng-template>\n\n  <ion-item-divider class=\"ion-no-padding\"></ion-item-divider>\n\n  <h3>Comentários</h3>\n\n  <div *ngIf=\"comments\">\n\n    <ion-card *ngFor=\"let comment of comments\" class=\"ion-no-margin ion-margin-top\">\n      <ion-card-header>\n        <ion-card-subtitle>Por {{ comment.name }} em {{ comment.date | date :'d/m/Y' }}.</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>{{ comment.comment }}</ion-card-content>\n    </ion-card>\n\n  </div>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_page_view_view_module_ts.js.map