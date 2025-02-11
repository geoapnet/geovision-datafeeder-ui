(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[8627],{"./libs/ui/inputs/src/lib/text-area/text-area.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>TextAreaComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,text_area_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/text-area/text-area.component.css?ngResource"),text_area_componentngResource_default=__webpack_require__.n(text_area_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),distinctUntilChanged=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js");let TextAreaComponent=((_class=class TextAreaComponent{constructor(){this.value="",this.required=!1,this.rawChange=new Subject.x,this.valueChange=this.rawChange.pipe((0,distinctUntilChanged.x)())}ngAfterViewInit(){this.checkRequired(this.input.nativeElement.value)}checkRequired(value){this.input.nativeElement.classList.toggle("invalid",this.required&&""===value)}handleChange($event){const value=$event.target.value;this.checkRequired(value),this.rawChange.next(value)}}).propDecorators={value:[{type:core.Input}],placeholder:[{type:core.Input}],required:[{type:core.Input}],valueChange:[{type:core.Output}],input:[{type:core.ViewChild,args:["input"]}]},_class);TextAreaComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-text-area",template:'<div class="h-full flex">\n  <textarea\n    #input\n    name="textArea"\n    [placeholder]="placeholder"\n    [value]="value"\n    (change)="handleChange($event)"\n    (input)="handleChange($event)"\n    class="w-full pt-2 pl-2 resize-none border border-gray-800 rounded italic leading-tight focus:outline-none focus:bg-background focus:border-primary"\n    [attr.required]="required || null"\n  ></textarea>\n</div>\n',styles:[text_area_componentngResource_default()]})],TextAreaComponent)},"./libs/ui/inputs/src/lib/text-area/text-area.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/TextAreaComponent",component:__webpack_require__("./libs/ui/inputs/src/lib/text-area/text-area.component.ts").U,decorators:[]},Primary={args:{value:"",placeholder:"Put something here!",required:!1},argTypes:{valueChange:{action:"valueChange"}}}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/inputs/src/lib/text-area/text-area.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".invalid {\n  border-color: var(--color-secondary);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);