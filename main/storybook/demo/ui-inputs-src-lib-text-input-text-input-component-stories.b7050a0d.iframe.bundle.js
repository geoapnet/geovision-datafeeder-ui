(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[578],{"./libs/ui/inputs/src/lib/text-input/text-input.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>TextInputComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var text_input_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/text-input/text-input.component.css?ngResource"),text_input_componentngResource_default=__webpack_require__.n(text_input_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),distinctUntilChanged=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let TextInputComponent=class TextInputComponent{constructor(){this.value="",this.extraClass="",this.required=!1,this.rawChange=new Subject.B,this.valueChange=this.rawChange.pipe((0,distinctUntilChanged.F)())}ngAfterViewInit(){this.checkRequired(this.input.nativeElement.value)}checkRequired(value){this.input.nativeElement.classList.toggle("invalid",this.required&&""===value)}handleChange($event){const value=$event.target.value;this.checkRequired(value),this.rawChange.next(value)}static#_=this.propDecorators={value:[{type:core.Input}],extraClass:[{type:core.Input}],placeholder:[{type:core.Input}],required:[{type:core.Input}],disabled:[{type:core.Input}],valueChange:[{type:core.Output}],input:[{type:core.ViewChild,args:["input"]}]}};TextInputComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-text-input",template:'<input\n  #input\n  class="gn-ui-text-input"\n  [ngClass]="extraClass"\n  type="text"\n  [value]="value"\n  (change)="handleChange($event)"\n  (input)="handleChange($event)"\n  [placeholder]="placeholder"\n  [attr.aria-label]="placeholder"\n  [attr.required]="required || null"\n  [disabled]="disabled"\n/>\n',standalone:!0,imports:[common.CommonModule],styles:[text_input_componentngResource_default()]})],TextInputComponent)},"./libs/ui/inputs/src/lib/text-input/text-input.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,WithCustomStyle:()=>WithCustomStyle,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/TextInputComponent",component:__webpack_require__("./libs/ui/inputs/src/lib/text-input/text-input.component.ts").f,decorators:[]},Primary={args:{value:"",placeholder:"Put something here!",required:!1,disabled:!1},argTypes:{valueChange:{action:"valueChange"}}},WithCustomStyle={args:{value:"",disabled:!1,placeholder:"https://mysite.org/file"},argTypes:{valueChange:{action:"valueChange"}},render:args=>({props:args,template:"\n    <div style=\"--gn-ui-text-input-rounded: 8px; --gn-ui-text-input-padding: 14px\">\n      <gn-ui-text-input [value]='value' [disabled]='disabled' [placeholder]='placeholder'>\n      </gn-ui-text-input>\n    </div>"})}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/inputs/src/lib/text-input/text-input.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".invalid {\n  border-color: var(--color-secondary);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);