(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[2122],{"./libs/ui/elements/src/lib/pagination-buttons/pagination-buttons.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>PaginationButtonsComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var pagination_buttons_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/pagination-buttons/pagination-buttons.component.css?ngResource"),pagination_buttons_componentngResource_default=__webpack_require__.n(pagination_buttons_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PaginationButtonsComponent=class PaginationButtonsComponent{constructor(){this.visiblePages=[],this.newCurrentPageEvent=new core.EventEmitter}ngOnChanges(){this.calculateVisiblePages()}calculateVisiblePages(){const halfVisible=Math.floor(2.5),startPage=Math.max(this.currentPage-halfVisible,1),endPage=Math.min(this.currentPage+halfVisible,this.totalPages),visiblePages=[];startPage>1&&(visiblePages.push(1),startPage>2&&visiblePages.push("..."));for(let page=startPage;page<=endPage;page++)visiblePages.push(page);endPage<this.totalPages&&(endPage<this.totalPages-1&&visiblePages.push("..."),visiblePages.push(this.totalPages)),this.visiblePages=visiblePages}changePage(page){this.setPage(page)}nextPage(){this.setPage(this.currentPage+1)}previousPage(){this.setPage(this.currentPage-1)}setPage(newPage){Number.isInteger(newPage)&&(this.currentPage=newPage,this.calculateVisiblePages(),this.newCurrentPageEvent.emit(this.currentPage))}static#_=this.propDecorators={currentPage:[{type:core.Input}],totalPages:[{type:core.Input}],newCurrentPageEvent:[{type:core.Output}]}};PaginationButtonsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-pagination-buttons",template:'<div class="relative">\n  <div class="flex flex-row gap-[5px] items-center">\n    <gn-ui-button\n      type="light"\n      [disabled]="currentPage === 1"\n      (buttonClick)="previousPage()"\n      extraClass="!px-[3px]"\n    >\n      <ng-icon name="iconoirNavArrowLeft"></ng-icon>\n    </gn-ui-button>\n    <ng-container *ngFor="let page of visiblePages">\n      <ng-container *ngIf="page === \'...\'">\n        <span class="mx-[5px]">{{ page }}</span>\n      </ng-container>\n      <ng-container *ngIf="page !== \'...\'">\n        <gn-ui-button\n          [type]="page === currentPage ? \'primary\' : \'light\'"\n          [disabled]="page === currentPage"\n          (buttonClick)="changePage(page)"\n          >{{ page }}</gn-ui-button\n        >\n      </ng-container>\n    </ng-container>\n    <gn-ui-button\n      type="light"\n      [disabled]="currentPage === totalPages"\n      (buttonClick)="nextPage()"\n      extraClass="!px-[3px]"\n    >\n      <ng-icon name="iconoirNavArrowRight"></ng-icon>\n    </gn-ui-button>\n  </div>\n</div>\n',styles:[pagination_buttons_componentngResource_default()]})],PaginationButtonsComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>chunk_AY7I2SME.XI});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./libs/ui/elements/src/lib/pagination-buttons/pagination-buttons.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/util/i18n/src/index.ts"),_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/inputs/src/index.ts"),_pagination_buttons_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/elements/src/lib/pagination-buttons/pagination-buttons.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/PaginationButtonsComponent",component:_pagination_buttons_component__WEBPACK_IMPORTED_MODULE_3__.z,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_geonetwork_ui_ui_inputs__WEBPACK_IMPORTED_MODULE_2__.Qp,_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_1__.D7,_angular_forms__WEBPACK_IMPORTED_MODULE_5__.YN,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_1__.sU)]})],render:args=>({props:{...args,newCurrentPageEvent:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.XI)("newCurrentPageEvent")}})},Primary={args:{currentPage:1,totalPages:10},parameters:{layout:"centered"}}},"./libs/ui/elements/src/lib/pagination-buttons/pagination-buttons.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);