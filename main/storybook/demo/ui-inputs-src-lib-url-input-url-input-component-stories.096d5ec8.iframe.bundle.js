(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[7423],{"./libs/ui/inputs/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.css?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts");let ButtonComponent=class ButtonComponent{constructor(){this.btnClass="gn-ui-btn-default",this.disabled=!1,this.extraClass="",this.buttonClick=new core.EventEmitter}set type(value){switch(value){case"primary":this.btnClass="gn-ui-btn-primary";break;case"secondary":this.btnClass="gn-ui-btn-secondary";break;case"outline":this.btnClass="gn-ui-btn-outline";break;case"light":this.btnClass="gn-ui-btn-light";break;default:this.btnClass="gn-ui-btn-default"}}get classList(){return`${this.btnClass} ${this.extraClass}`}handleClick(event){this.buttonClick.emit(),event.preventDefault(),(0,src.Yr)(event)}static#_=this.propDecorators={type:[{type:core.Input}],disabled:[{type:core.Input}],extraClass:[{type:core.Input}],buttonClick:[{type:core.Output}]}};ButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-button",template:'<button\n  type="button"\n  [class]="classList"\n  [disabled]="disabled"\n  (click)="handleClick($event)"\n>\n  <ng-content></ng-content>\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[button_componentngResource_default()]})],ButtonComponent)},"./libs/ui/inputs/src/lib/url-input/url-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>UrlInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var url_input_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/url-input/url-input.component.css?ngResource"),url_input_componentngResource_default=__webpack_require__.n(url_input_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),button_component=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.ts"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js");let UrlInputComponent=class UrlInputComponent{constructor(cd){this.cd=cd,this.value="",this.extraClass="",this.placeholder="https://",this.rawChange=new Subject.x,this.valueChange=this.rawChange.pipe((0,filter.h)((v=>!!v)))}handleInput(){this.cd.markForCheck()}handleChange(element){const value=element.value;this.rawChange.next(value)}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={value:[{type:core.Input}],extraClass:[{type:core.Input}],placeholder:[{type:core.Input}],disabled:[{type:core.Input}],valueChange:[{type:core.Output}]}};UrlInputComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-url-input",template:'<span class="w-full inline-block relative">\n  <input\n    #input\n    class="gn-ui-text-input px-[var(--text-padding)]"\n    [ngClass]="extraClass"\n    type="url"\n    [value]="value"\n    (input)="handleInput()"\n    (keydown.enter)="handleChange(input)"\n    [placeholder]="placeholder"\n    [attr.aria-label]="placeholder"\n    [disabled]="disabled"\n  />\n  <div\n    class="absolute inset-y-[var(--side-padding)] left-[var(--2x-side-padding)] grid justify-center items-center pointer-events-none"\n    [ngClass]=\'{\n      "text-primary": !disabled,\n      "text-primary-lightest": disabled,\n    }\'\n  >\n    <mat-icon\n      class="material-symbols-outlined h-[24px] !w-[26px] text-[28px] leading-[24px]"\n    >\n      link\n    </mat-icon>\n  </div>\n  <gn-ui-button\n    extraClass="absolute inset-y-[var(--side-padding)] right-[var(--side-padding)]"\n    type="primary"\n    [disabled]="disabled || input.value === \'\'"\n    (buttonClick)="handleChange(input)"\n  >\n    <mat-icon class="material-symbols-outlined text-[20px] leading-[26px]">\n      arrow_upward\n    </mat-icon>\n  </gn-ui-button>\n</span>\n',standalone:!0,imports:[common.CommonModule,button_component.r,icon.Ps],styles:[url_input_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],UrlInputComponent)},"./libs/ui/inputs/src/lib/url-input/url-input.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithCustomStyle:()=>WithCustomStyle,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/UrlInputComponent",component:__webpack_require__("./libs/ui/inputs/src/lib/url-input/url-input.component.ts").u,decorators:[]},Primary={args:{value:"",disabled:!1},argTypes:{valueChange:{action:"valueChange"}}},WithCustomStyle={args:{value:"",disabled:!1,placeholder:"https://mysite.org/file"},argTypes:{valueChange:{action:"valueChange"}},render:args=>({props:args,template:"\n    <div style=\"--gn-ui-text-input-rounded: 8px; --gn-ui-text-input-padding: 14px\">\n      <gn-ui-url-input [value]='value' [disabled]='disabled' [placeholder]='placeholder' (valueChange)='valueChange($event)'>\n      </gn-ui-url-input>\n    </div>"})}},"./libs/ui/inputs/src/lib/button/button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/url-input/url-input.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --gn-ui-button-rounded: 8px;\n  --gn-ui-button-width: 32px;\n  --gn-ui-button-padding: 0;\n\n  --side-padding: calc(var(--gn-ui-text-input-padding, 0.6em) - 6px);\n  --2x-side-padding: calc(var(--side-padding) * 2);\n  --text-padding: calc(var(--side-padding) + 40px);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);