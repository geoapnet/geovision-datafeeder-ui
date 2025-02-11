(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[3400],{"./libs/ui/inputs/src/lib/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.css?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts");let ButtonComponent=class ButtonComponent{constructor(){this.btnClass="gn-ui-btn-default",this.disabled=!1,this.extraClass="",this.buttonClick=new core.EventEmitter}set type(value){switch(value){case"primary":this.btnClass="gn-ui-btn-primary";break;case"secondary":this.btnClass="gn-ui-btn-secondary";break;case"outline":this.btnClass="gn-ui-btn-outline";break;case"light":this.btnClass="gn-ui-btn-light";break;case"gray":this.btnClass="gn-ui-btn-gray";break;case"black":this.btnClass="gn-ui-btn-black";break;default:this.btnClass="gn-ui-btn-default"}}get classList(){return`${this.btnClass} ${this.extraClass}`}handleClick(event){this.buttonClick.emit(),event.preventDefault(),(0,src.Y8)(event)}static#_=this.propDecorators={type:[{type:core.Input}],disabled:[{type:core.Input}],extraClass:[{type:core.Input}],buttonClick:[{type:core.Output}]}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-button",template:'<button\n  type="button"\n  [class]="classList"\n  [disabled]="disabled"\n  (click)="handleClick($event)"\n>\n  <ng-content></ng-content>\n</button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[button_componentngResource_default()]})],ButtonComponent)},"./libs/ui/inputs/src/lib/date-range-picker/date-range-picker.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DateRangePickerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var date_range_picker_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/date-range-picker/date-range-picker.component.css?ngResource"),date_range_picker_componentngResource_default=__webpack_require__.n(date_range_picker_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),datepicker=__webpack_require__("./node_modules/@angular/material/fesm2022/datepicker.mjs"),button_component=__webpack_require__("./libs/ui/inputs/src/lib/button/button.component.ts"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),ng_icons_iconoir=__webpack_require__("./node_modules/@ng-icons/iconoir/fesm2022/ng-icons-iconoir.mjs");let DateRangePickerComponent=class DateRangePickerComponent{constructor(){this.startDateChange=new core.EventEmitter,this.endDateChange=new core.EventEmitter}static#_=this.propDecorators={startDate:[{type:core.Input}],endDate:[{type:core.Input}],startDateChange:[{type:core.Output}],endDateChange:[{type:core.Output}]}};DateRangePickerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-date-range-picker",template:'<span class="w-full inline-block relative">\n  <mat-date-range-input [rangePicker]="picker" class="gn-ui-text-input">\n    <input\n      matStartDate\n      placeholder="Start date"\n      [value]="startDate"\n      (dateInput)="startDateChange.emit($event.value)"\n    />\n    <input\n      matEndDate\n      placeholder="End date"\n      [value]="endDate"\n      (dateInput)="endDateChange.emit($event.value)"\n    />\n  </mat-date-range-input>\n\n  <gn-ui-button\n    type="light"\n    class="absolute inset-y-[var(--side-padding)] right-[var(--side-padding)] z-10"\n    (buttonClick)="picker.open()"\n    extraClass="h-full"\n    data-cy="date-picker-button"\n  >\n    <ng-icon name="iconoirCalendar" class="text-primary"></ng-icon>\n  </gn-ui-button>\n</span>\n<mat-date-range-picker #picker></mat-date-range-picker>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[fesm2022_core.WX,datepicker.X6,button_component.Q,ng_icons_core.Uq],providers:[(0,ng_icons_core.EB)({iconoirCalendar:ng_icons_iconoir.EPN}),(0,ng_icons_core.PG)({size:"1.5rem"})],styles:[date_range_picker_componentngResource_default()]})],DateRangePickerComponent)},"./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{EB:()=>provideIcons,PG:()=>provideNgIconsConfig,Uq:()=>NgIcon,i6:()=>NgIconsModule});var _home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isObservable.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");const NgIconConfigToken=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Ng Icon Config"),defaultConfig={size:"1em"};function provideNgIconsConfig(config){return{provide:NgIconConfigToken,useValue:{...defaultConfig,...config}}}const NgIconLoaderToken=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Ng Icon Loader Token");const NgIconCacheToken=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Ng Icon Cache Token");function provideIcons(icons){return[{provide:NgIconsToken,useFactory:parentIcons=>({...parentIcons?.reduce(((acc,icons)=>({...acc,...icons})),{}),...icons}),deps:[[NgIconsToken,new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf]],multi:!0}]}const NgIconsToken=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Icons Token");class NgIcon{constructor(){this.config=function injectNgIconConfig(){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgIconConfigToken,{optional:!0})??defaultConfig}(),this.icons=function injectNgIcons(){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgIconsToken,{optional:!0})??[]}(),this.loader=function injectNgIconLoader(){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgIconLoaderToken,{optional:!0})}(),this.cache=function injectNgIconLoaderCache(){return(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(NgIconCacheToken,{optional:!0})}(),this.injector=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector),this.elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef),this._size=this.config.size,this.color=this.config.color}set name(name){this.setIcon(name)}set size(size){this._size=function coerceCssPixelValue(value){return null==value?"":/^\d+$/.test(value)?`${value}px`:value}(size)}get size(){return this._size}setIcon(name){var _this=this;return(0,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.A)((function*(){const propertyName=function toPropertyName(str){return str.replace(/([^a-zA-Z0-9])+(.)?/g,((_,__,chr)=>chr?chr.toUpperCase():"")).replace(/[^a-zA-Z\d]/g,"").replace(/^([A-Z])/,(m=>m.toLowerCase()))}(name);for(const icons of[..._this.icons].reverse())if(icons[propertyName])return void(_this.elementRef.nativeElement.innerHTML=icons[propertyName]);if(_this.cache?.has(name))_this.elementRef.nativeElement.innerHTML=_this.cache.get(name);else{if(_this.loader){const result=yield _this.requestIconFromLoader(name);if(null!==result)return _this.cache?.set(name,result),void(_this.elementRef.nativeElement.innerHTML=result)}console.warn(`No icon named ${name} was found. You may need to import it using the withIcons function.`)}}))()}requestIconFromLoader(name){var _this2=this;return new Promise((resolve=>{(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.runInInjectionContext)(this.injector,(0,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__.A)((function*(){const result=yield function coerceLoaderResult(result){return"string"==typeof result?Promise.resolve(result):(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.A)(result)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__._)(result):result}(_this2.loader(name));resolve(result)})))}))}static#_=this.ɵfac=function NgIcon_Factory(t){return new(t||NgIcon)};static#_2=this.ɵcmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({type:NgIcon,selectors:[["ng-icon"]],hostVars:6,hostBindings:function NgIcon_HostBindings(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--ng-icon__size",ctx.size)("--ng-icon__stroke-width",ctx.strokeWidth)("color",ctx.color)},inputs:{name:"name",size:"size",strokeWidth:"strokeWidth",color:"color"},standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],decls:0,vars:0,template:function NgIcon_Template(rf,ctx){},styles:["[_nghost-%COMP%]{display:inline-block;width:var(--ng-icon__size);height:var(--ng-icon__size)}"],changeDetection:0})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIcon,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,args:[{selector:"ng-icon",template:"",standalone:!0,changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,styles:[":host{display:inline-block;width:var(--ng-icon__size);height:var(--ng-icon__size)}\n"]}]}],null,{name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["style.--ng-icon__size"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],strokeWidth:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["style.--ng-icon__stroke-width"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}],color:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["style.color"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input}]});class NgIconsModule{constructor(icons){if(0===Object.keys(icons).length)throw new Error("No icons have been provided. Ensure to include some icons by importing them using NgIconsModule.withIcons({ ... }).")}static withIcons(icons){return{ngModule:NgIconsModule,providers:provideIcons(icons)}}static#_=this.ɵfac=function NgIconsModule_Factory(t){return new(t||NgIconsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NgIconsToken))};static#_2=this.ɵmod=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type:NgIconsModule,imports:[NgIcon],exports:[NgIcon]});static#_3=this.ɵinj=_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgIconsModule,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,args:[{imports:[NgIcon],exports:[NgIcon]}]}],(function(){return[{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,args:[NgIconsToken]}]}]}),null)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>ReplaySubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_Subject__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.U);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.C6)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(_Subject__WEBPACK_IMPORTED_MODULE_2__.B)},"./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>firstValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Ms({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.G)}});source.subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.U)(1)}()((0,from.H)(args,(0,util_args.lI)(args)))}},"./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>forkJoin});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js");function forkJoin(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),sources=_a.args,keys=_a.keys,result=new _Observable__WEBPACK_IMPORTED_MODULE_2__.c((function(subscriber){var length=sources.length;if(length)for(var values=new Array(length),remainingCompletions=length,remainingEmissions=length,_loop_1=function(sourceIndex){var hasValue=!1;(0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__._)(subscriber,(function(value){hasValue||(hasValue=!0,remainingEmissions--),values[sourceIndex]=value}),(function(){return remainingCompletions--}),void 0,(function(){remainingCompletions&&hasValue||(remainingEmissions||subscriber.next(keys?(0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.e)(keys,values):values),subscriber.complete())})))},sourceIndex=0;sourceIndex<length;sourceIndex++)_loop_1(sourceIndex);else subscriber.complete()}));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),_share__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,_share__WEBPACK_IMPORTED_MODULE_0__.u)({connector:function(){return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>dateTimestampProvider});var dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/isObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>isObservable});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_isFunction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function isObservable(obj){return!!obj&&(obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.c||(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.lift)&&(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.subscribe))}},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./libs/ui/inputs/src/lib/date-range-picker/date-range-picker.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{End:()=>End,Neither:()=>Neither,Start:()=>Start,StartEnd:()=>StartEnd,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/DateRangePickerComponent",component:__webpack_require__("./libs/ui/inputs/src/lib/date-range-picker/date-range-picker.component.ts").f,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule)]})]},StartEnd={args:{startDate:new Date,endDate:new Date}},Start={args:{startDate:new Date}},End={args:{endDate:new Date}},Neither={args:{}}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/inputs/src/lib/button/button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/date-range-picker/date-range-picker.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --gn-ui-button-rounded: 8px;\n  --gn-ui-button-width: 32px;\n  --gn-ui-button-padding: 0;\n\n  --side-padding: calc(var(--gn-ui-text-input-padding, 0.6em) - 6px);\n  --text-padding: calc(var(--side-padding) + 40px);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);