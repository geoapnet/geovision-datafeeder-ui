"use strict";(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[7074],{"./libs/ui/elements/src/lib/avatar/avatar.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>AvatarComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let AvatarComponent=class AvatarComponent{hideImage(){this.avatarUrl=this.avatarPlaceholder}static#_=this.propDecorators={avatarUrl:[{type:core.Input}],avatarPlaceholder:[{type:core.Input}]}};AvatarComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-avatar",template:'<img\n  *ngIf="avatarUrl"\n  class="rounded-full object-cover"\n  [src]="avatarUrl"\n  (error)="hideImage()"\n/>\n<div\n  *ngIf="!avatarUrl"\n  class="w-full h-full rounded-full bg-gradient-to-tr from-primary to-slate-200"\n></div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],AvatarComponent)},"./libs/ui/elements/src/lib/user-preview/user-preview.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>UserPreviewComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UserPreviewComponent=class UserPreviewComponent{get userFullName(){return(this.user.name+" "+this.user.surname).trim()}static#_=this.propDecorators={user:[{type:core.Input}],avatarPlaceholder:[{type:core.Input}]}};UserPreviewComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-user-preview",template:'<figure class="text-center">\n  <div\n    class="w-10 h-10 border border-primary rounded-full capitalize"\n    [matTooltip]="userFullName"\n  >\n    <gn-ui-avatar\n      [avatarUrl]="user.profileIcon"\n      [avatarPlaceholder]="avatarPlaceholder"\n    ></gn-ui-avatar>\n  </div>\n</figure>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],UserPreviewComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>ReplaySubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_Subject__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.U);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.C6)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(_Subject__WEBPACK_IMPORTED_MODULE_2__.B)},"./node_modules/rxjs/dist/esm5/internal/observable/defer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>defer});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function defer(observableFactory){return new _Observable__WEBPACK_IMPORTED_MODULE_0__.c((function(subscriber){(0,_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(observableFactory()).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/observable/throwError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>throwError});var _Observable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function throwError(errorOrErrorFactory,scheduler){var errorFactory=(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(errorOrErrorFactory)?errorOrErrorFactory:function(){return errorOrErrorFactory},init=function(subscriber){return subscriber.error(errorFactory())};return new _Observable__WEBPACK_IMPORTED_MODULE_1__.c(scheduler?function(subscriber){return scheduler.schedule(init,0,subscriber)}:init)}},"./node_modules/rxjs/dist/esm5/internal/operators/catchError.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>catchError});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function catchError(selector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var handledResult,innerSub=null,syncUnsub=!1;innerSub=source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(subscriber,void 0,void 0,(function(err){handledResult=(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Tg)(selector(err,catchError(selector)(source))),innerSub?(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber)):syncUnsub=!0}))),syncUnsub&&(innerSub.unsubscribe(),innerSub=null,handledResult.subscribe(subscriber))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>mapTo});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");function mapTo(value){return(0,_map__WEBPACK_IMPORTED_MODULE_0__.T)((function(){return value}))}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),_share__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,_share__WEBPACK_IMPORTED_MODULE_0__.u)({connector:function(){return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./node_modules/rxjs/dist/esm5/internal/util/isObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>isObservable});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_isFunction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function isObservable(obj){return!!obj&&(obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.c||(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.lift)&&(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.subscribe))}},"./libs/ui/elements/src/lib/user-preview/user-preview.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_geonetwork_ui_common_fixtures__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/common/fixtures/src/index.ts"),_user_preview_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/elements/src/lib/user-preview/user-preview.component.ts"),_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/tooltip.mjs"),_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/elements/src/lib/avatar/avatar.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/UserPreviewComponent",component:_user_preview_component__WEBPACK_IMPORTED_MODULE_2__.L,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__.f],imports:[_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.uc],providers:[]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,_angular_router__WEBPACK_IMPORTED_MODULE_7__.iI.forRoot([]))]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div style="max-width: 800px">${story}</div>`))]},Primary={args:{user:(0,_geonetwork_ui_common_fixtures__WEBPACK_IMPORTED_MODULE_1__.qH)(),avatarPlaceholder:"https://www.gravatar.com/avatar/?d=mp"}}}}]);