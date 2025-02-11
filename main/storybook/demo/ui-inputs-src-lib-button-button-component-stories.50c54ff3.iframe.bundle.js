(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[4642],{"./libs/ui/inputs/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.css?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts");let ButtonComponent=class ButtonComponent{constructor(){this.disabled=!1,this.extraClass="",this.buttonClick=new core.EventEmitter}set type(value){switch(value){case"primary":this.btnClass="gn-ui-btn-primary";break;case"secondary":this.btnClass="gn-ui-btn-secondary";break;case"outline":this.btnClass="gn-ui-btn-outline";break;case"light":this.btnClass="gn-ui-btn-light";break;default:this.btnClass="gn-ui-btn-default"}}get classList(){return`${this.btnClass} ${this.extraClass}`}handleClick(event){this.buttonClick.emit(),event.preventDefault(),(0,src.Yr)(event)}static#_=this.propDecorators={type:[{type:core.Input}],disabled:[{type:core.Input}],extraClass:[{type:core.Input}],buttonClick:[{type:core.Output}]}};ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-button",template:'<button\n  type="button"\n  [class]="classList"\n  [disabled]="disabled"\n  (click)="handleClick($event)"\n>\n  <ng-content></ng-content>\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[button_componentngResource_default()]})],ButtonComponent)},"./libs/ui/inputs/src/lib/button/button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/i18n/src/index.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2022/progress-spinner.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/ButtonComponent",component:_button_component__WEBPACK_IMPORTED_MODULE_1__.r,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.pw,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.aw.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.fR),_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.Ps,_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.Cq]})]},Primary={args:{type:"default",disabled:!1,extraClass:"",content:"My button"},argTypes:{type:{control:"radio",options:["primary","secondary","default","outline","light"]}},render:args=>({props:args,template:'<div class=\'flex flex-row gap-5 flex-wrap\'>\n  <gn-ui-button [type]="type" [disabled]="disabled" [extraClass]="extraClass">\n    {{ content }}\n  </gn-ui-button>\n  <gn-ui-button [type]="type" [disabled]="disabled" [extraClass]="extraClass">\n    with an icon&nbsp;<mat-icon class="material-symbols-outlined">downloading</mat-icon>\n  </gn-ui-button>\n  <gn-ui-button [type]="type" [disabled]="disabled"\n    [style.--gn-ui-button-font-size]=\'"1.5em"\'\n    [extraClass]="extraClass">\n    <mat-icon class=\'material-symbols-outlined\'>globe_asia</mat-icon>&nbsp;bigger (with variable)\n  </gn-ui-button>\n  <gn-ui-button [type]="type" [disabled]="disabled"\n    [style.font-size]=\'"0.7em"\'\n    [extraClass]="extraClass">\n    <mat-icon class=\'material-symbols-outlined\'>pest_control</mat-icon>&nbsp;smaller (with css)\n  </gn-ui-button>\n  <gn-ui-button [type]="type" [disabled]="disabled"\n    [style.--gn-ui-button-padding]=\'"0.5em 3em"\'\n    [extraClass]="extraClass">\n    different&nbsp;<mat-icon class="material-symbols-outlined">waves</mat-icon>&nbsp;shape\n  </gn-ui-button>\n  <gn-ui-button [type]="type" [disabled]="disabled"\n    [style.--gn-ui-button-rounded]=\'"10px"\'\n    [extraClass]="extraClass">\n    different corners\n  </gn-ui-button>\n  <div class=\'h-[150px] w-[150px] resize overflow-auto border border-gray-200 p-3\'>\n    <gn-ui-button [type]="type" [disabled]="disabled"\n      [style.--gn-ui-button-width]=\'"100%"\' [style.--gn-ui-button-height]=\'"100%"\'\n      [extraClass]="extraClass">\n      <mat-icon class="material-symbols-outlined">fit_screen</mat-icon>&nbsp;resize it\n    </gn-ui-button>\n  </div>\n  <gn-ui-button [type]="type" [disabled]="disabled" [extraClass]="extraClass">\n    <mat-spinner [diameter]="32"></mat-spinner>\n  </gn-ui-button>\n  <gn-ui-button [type]="type" [disabled]="disabled"\n    [style.--gn-ui-button-background]=\'"rgba(168,255,235,1)"\'\n    [extraClass]="extraClass">\n    different background\n  </gn-ui-button>\n</div>'})}},"./libs/ui/inputs/src/lib/button/button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);