(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[8884],{"./libs/ui/widgets/src/lib/popup-alert/popup-alert.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>PopupAlertComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,popup_alert_componentngResource=__webpack_require__("./libs/ui/widgets/src/lib/popup-alert/popup-alert.component.css?ngResource"),popup_alert_componentngResource_default=__webpack_require__.n(popup_alert_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PopupAlertComponent=((_class=class PopupAlertComponent{constructor(changeDetector){this.changeDetector=changeDetector,this.type="info",this.position="top",this.expanded=!1,this.timeout=null}get showDuration(){const chars=this.content.nativeElement.innerHTML.length;return Math.max(3e3,20*chars)}ngOnInit(){this.expandAndClose()}expand(){this.expanded=!0,this.changeDetector.detectChanges(),clearTimeout(this.timeout)}expandAndClose(){this.expanded=!0,this.changeDetector.detectChanges(),clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.expanded=!1,this.changeDetector.detectChanges()}),this.showDuration)}}).ctorParameters=()=>[{type:core.ChangeDetectorRef}],_class.propDecorators={icon:[{type:core.Input}],type:[{type:core.Input}],position:[{type:core.Input}],content:[{type:core.ViewChild,args:["content"]}]},_class);PopupAlertComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-popup-alert",template:"<div class=\"h-full relative container\">\n  <div\n    class=\"pointer-events-auto absolute text-white flex flex-row p-2 rounded message\"\n    role=\"alert\"\n    [ngClass]=\"{\n      'position-bottom': position === 'bottom',\n      'position-top': position === 'top',\n      expanded: this.expanded,\n      'bg-red-500': type === 'danger',\n      'bg-yellow-500': type === 'warning',\n      'bg-blue-500': type === 'info'\n    }\"\n    (mouseenter)=\"expand()\"\n    (mouseleave)=\"expandAndClose()\"\n  >\n    <mat-icon class=\"mr-2 shrink-0 select-none\">{{ icon }}</mat-icon>\n    <div class=\"grow\" #content [ngClass]=\"{ invisible: !expanded }\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[popup_alert_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],PopupAlertComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>forkJoin});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js");function forkJoin(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.jO)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),sources=_a.args,keys=_a.keys,result=new _Observable__WEBPACK_IMPORTED_MODULE_2__.y((function(subscriber){var length=sources.length;if(length)for(var values=new Array(length),remainingCompletions=length,remainingEmissions=length,_loop_1=function(sourceIndex){var hasValue=!1;(0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Xf)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.x)(subscriber,(function(value){hasValue||(hasValue=!0,remainingEmissions--),values[sourceIndex]=value}),(function(){return remainingCompletions--}),void 0,(function(){remainingCompletions&&hasValue||(remainingEmissions||subscriber.next(keys?(0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.n)(keys,values):values),subscriber.complete())})))},sourceIndex=0;sourceIndex<length;sourceIndex++)_loop_1(sourceIndex);else subscriber.complete()}));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.Z)(resultSelector)):result}},"./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>dateTimestampProvider});var dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{n:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.U)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ev)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.CR)(args))):fn(args)}(fn,args)}))}},"./libs/ui/widgets/src/lib/popup-alert/popup-alert.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_popup_alert_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/widgets/src/lib/popup-alert/popup-alert.component.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Widgets/PopupAlertComponent",component:_popup_alert_component__WEBPACK_IMPORTED_MODULE_1__.z,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.Ps]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`\n<div class="border border-gray-300 p-2" style="width: 600px; height:300px; resize: both; overflow: auto">\n  ${story}\n</div>`))],argTypes:{position:{control:"radio",options:["top","bottom"]},type:{control:"select",options:["info","warning","danger"]}}},Primary={args:{icon:"error_outline",position:"top",type:"info"},render:args=>({props:args,template:"<gn-ui-popup-alert [icon]='icon' [position]='position'>Something went wrong during a task that was probably too complicated, you should probably <a href=\"https://www.google.com\">look for answers</a> and come back!</gn-ui-popup-alert>"})}},"./libs/ui/widgets/src/lib/popup-alert/popup-alert.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  pointer-events: none;\n}\n.container {\n  filter: drop-shadow(0px 4px 3px rgba(0, 0, 0, 0.2));\n}\n.message {\n  transition: clip-path 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.message.expanded {\n  clip-path: circle(100%);\n}\n.position-top {\n  clip-path: circle(19px at 20px 20px);\n  align-items: start;\n  top: 0;\n  left: 0;\n}\n.position-bottom {\n  clip-path: circle(19px at 20px calc(100% - 20px));\n  align-items: end;\n  bottom: 0;\n  left: 0;\n}\n\n/* style links inside message */\n.container ::ng-deep a {\n  text-decoration: underline;\n  font-weight: bold;\n}\n.container ::ng-deep a:hover {\n  opacity: 0.85;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);