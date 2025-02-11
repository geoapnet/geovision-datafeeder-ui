(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[142],{"./libs/ui/layout/src/lib/anchor-link/anchor-link.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>AnchorLinkDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let AnchorLinkDirective=class AnchorLinkDirective{get elementClass(){return this.disabled?this.disabledClass:this.enabledClass}constructor(changeDetector){this.changeDetector=changeDetector,this.disabled=!1,this.observer=new MutationObserver((()=>{this.refreshDisabledState()}))}ngOnInit(){this.observer.observe(document.body,{childList:!0,subtree:!0}),this.refreshDisabledState()}ngOnDestroy(){this.observer.disconnect()}refreshDisabledState(){const targetNotPresent=!document.getElementById(this.targetId);targetNotPresent!==this.disabled&&(this.disabled=targetNotPresent,this.changeDetector.detectChanges())}scrollToTarget(){const target=document.getElementById(this.targetId);target&&target.scrollIntoView({behavior:"smooth",block:"start"})}static#_=this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef}];static#_2=this.propDecorators={targetId:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:["gnUiAnchorLink"]}],disabledClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:["gnUiAnchorLinkDisabledClass"]}],enabledClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:["gnUiAnchorLinkEnabledClass"]}],elementClass:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class"]}],scrollToTarget:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["click"]}]}};AnchorLinkDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[gnUiAnchorLink]"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef])],AnchorLinkDirective)},"./libs/ui/layout/src/lib/carousel/carousel.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>CarouselComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var carousel_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/carousel/carousel.component.css?ngResource"),carousel_componentngResource_default=__webpack_require__.n(carousel_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),embla_carousel_esm=__webpack_require__("./node_modules/embla-carousel/embla-carousel.esm.js");let CarouselComponent=class CarouselComponent{constructor(changeDetector){this.changeDetector=changeDetector,this.containerClass="",this.stepsContainerClass="",this.steps=[],this.selectedStep=-1}ngAfterViewInit(){this.emblaApi=(0,embla_carousel_esm.Z)(this.carouselOverflowContainer.nativeElement,{duration:15});const refreshSteps=()=>{this.steps=this.emblaApi.scrollSnapList(),this.selectedStep=this.emblaApi.selectedScrollSnap(),this.changeDetector.detectChanges()};this.emblaApi.on("init",refreshSteps).on("reInit",refreshSteps).on("select",refreshSteps)}scrollToStep(stepIndex){this.emblaApi.scrollTo(stepIndex)}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef}];static#_2=this.propDecorators={containerClass:[{type:core.Input}],stepsContainerClass:[{type:core.Input}],carouselOverflowContainer:[{type:core.ViewChild,args:["carouselOverflowContainer"]}]}};CarouselComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-carousel",template:'<div #carouselOverflowContainer class="overflow-hidden h-full w-full">\n  <div class="carousel-container flex flex-row" [ngClass]="containerClass">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div\n  class="absolute right-0 top-0 flex flex-row justify-center gap-[10px] p-1"\n  [ngClass]="stepsContainerClass"\n>\n  <button\n    *ngFor="let step of steps; let i = index"\n    class="carousel-step-dot"\n    (click)="scrollToStep(i)"\n    [ngClass]="selectedStep === i ? \'bg-secondary\' : \'bg-gray-400\'"\n  ></button>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[carousel_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],CarouselComponent)},"./libs/ui/layout/src/lib/expandable-panel-button/expandable-panel-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>ExpandablePanelButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var expandable_panel_button_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/expandable-panel-button/expandable-panel-button.component.css?ngResource"),expandable_panel_button_componentngResource_default=__webpack_require__.n(expandable_panel_button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ExpandablePanelButtonComponent=class ExpandablePanelButtonComponent{constructor(){this.collapsed=!0}toggle(){this.collapsed=!this.collapsed}static#_=this.propDecorators={titleTemplate:[{type:core.Input}],collapsed:[{type:core.Input}]}};ExpandablePanelButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-expandable-panel-button",template:'<button\n  type="button"\n  class="px-4 bg-primary hover:bg-primary-darker text-white flex flex-row w-full items-center font-bold text-lg pointer-events-auto"\n  [style.height]="\'55px\'"\n  (click)="toggle()"\n>\n  <ng-container [ngTemplateOutlet]="titleTemplate"></ng-container>\n  <div class="ml-3 grow"></div>\n  <mat-icon class="material-symbols-outlined" *ngIf="collapsed"\n    >expand_more</mat-icon\n  >\n  <mat-icon class="material-symbols-outlined" *ngIf="!collapsed"\n    >expand_less</mat-icon\n  >\n</button>\n<div\n  class="content transition-all pointer-events-auto bg-white"\n  [style.height]="collapsed ? \'0px\' : \'calc(100% - 55px)\'"\n  [ngClass]="collapsed ? \'overflow-hidden\' : \'overflow-auto\'"\n>\n  <ng-content></ng-content>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[expandable_panel_button_componentngResource_default()]})],ExpandablePanelButtonComponent)},"./libs/ui/layout/src/lib/expandable-panel/expandable-panel.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>ExpandablePanelComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var expandable_panel_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/expandable-panel/expandable-panel.component.css?ngResource"),expandable_panel_componentngResource_default=__webpack_require__.n(expandable_panel_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ExpandablePanelComponent=class ExpandablePanelComponent{constructor(){this.collapsed=!0,this.maxHeight=this.setMaxHeight()}toggle(){this.collapsed=!this.collapsed,this.maxHeight=this.setMaxHeight()}setMaxHeight(){return`${this.collapsed?"0":this.contentDiv.nativeElement.scrollHeight}px`}static#_=this.propDecorators={title:[{type:core.Input}],collapsed:[{type:core.Input}],contentDiv:[{type:core.ViewChild,args:["contentDiv"]}]}};ExpandablePanelComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-expandable-panel",template:'<div\n  class="group flex align-middle title border-b border-gray-100 cursor-pointer pt-2.5"\n  (click)="toggle()"\n>\n  <div class="grow font-medium text-black text-sm">\n    {{ title }}\n  </div>\n  <div\n    class="w-8 opacity-25 text-primary group-hover:opacity-100 transition-opacity"\n  >\n    <mat-icon class="material-symbols-outlined" *ngIf="collapsed">add</mat-icon>\n    <mat-icon class="material-symbols-outlined" *ngIf="!collapsed"\n      >remove</mat-icon\n    >\n  </div>\n</div>\n<div\n  class="content overflow-hidden transition-[max-height] duration-300"\n  [ngClass]="collapsed ? \'ease-out\' : \'ease-in\'"\n  [style.maxHeight]="maxHeight"\n  #contentDiv\n>\n  <ng-content></ng-content>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[expandable_panel_componentngResource_default()]})],ExpandablePanelComponent)},"./libs/ui/layout/src/lib/sticky-header/sticky-header.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>StickyHeaderComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var sticky_header_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/sticky-header/sticky-header.component.css?ngResource"),sticky_header_componentngResource_default=__webpack_require__.n(sticky_header_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),animationFrame=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js"),throttleTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js");let StickyHeaderComponent=class StickyHeaderComponent{constructor(changeDetector,hostEl,zone){this.changeDetector=changeDetector,this.hostEl=hostEl,this.zone=zone}ngAfterViewInit(){this.scrollSub=(0,fromEvent.R)(window,"scroll",{passive:!0}).pipe((0,throttleTime.p)(0,animationFrame.Z,{leading:!0,trailing:!0})).subscribe(this.updateSize.bind(this))}ngOnInit(){this.placeholderEl=document.createElement("div"),this.placeholderEl.style.position="absolute",this.placeholderEl.classList.add("sticky-header-placeholder"),this.hostEl.nativeElement.insertAdjacentElement("beforebegin",this.placeholderEl)}ngAfterViewChecked(){this.updateSize()}ngOnDestroy(){this.scrollSub.unsubscribe(),this.placeholderEl.remove()}updateSize(){this.zone.runOutsideAngular((()=>{if(window.scrollY===this.parentScroll)return;this.parentScroll=window.scrollY;const offsetTop=Math.max(0,this.parentScroll-this.placeholderEl.offsetTop),newHeightPx=Math.max(this.minHeightPx,this.fullHeightPx-offsetTop);this.innerContainer.nativeElement.style.transform=`translate(0, ${newHeightPx-this.fullHeightPx}px)`,this.expandRatio=(newHeightPx-this.minHeightPx)/(this.fullHeightPx-this.minHeightPx),this.changeDetector.detectChanges()}))}static#_=this.ctorParameters=()=>[{type:core.ChangeDetectorRef},{type:core.ElementRef,decorators:[{type:core.Host}]},{type:core.NgZone}];static#_2=this.propDecorators={minHeightPx:[{type:core.Input}],fullHeightPx:[{type:core.Input}],template:[{type:core.ContentChild,args:[core.TemplateRef]}],outerContainer:[{type:core.ViewChild,args:["outerContainer"]}],innerContainer:[{type:core.ViewChild,args:["innerContainer"]}]}};StickyHeaderComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-sticky-header",template:'<div\n  #outerContainer\n  class="sticky pointer-events-none z-50 top-0"\n  [style.height]="fullHeightPx + \'px\'"\n>\n  <div\n    #innerContainer\n    class="relative pointer-events-auto"\n    [style.height]="fullHeightPx + \'px\'"\n  >\n    <ng-container\n      [ngTemplateOutlet]="template"\n      [ngTemplateOutletContext]="{ $implicit: expandRatio }"\n    ></ng-container>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[sticky_header_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef,core.ElementRef,core.NgZone])],StickyHeaderComponent)},"./libs/ui/layout/src/lib/ui-layout.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{P:()=>UiLayoutModule});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_expandable_panel_expandable_panel_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/layout/src/lib/expandable-panel/expandable-panel.component.ts"),_sticky_header_sticky_header_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/layout/src/lib/sticky-header/sticky-header.component.ts"),_anchor_link_anchor_link_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/layout/src/lib/anchor-link/anchor-link.directive.ts"),_expandable_panel_button_expandable_panel_button_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/layout/src/lib/expandable-panel-button/expandable-panel-button.component.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui/layout/src/lib/carousel/carousel.component.ts");let UiLayoutModule=class UiLayoutModule{};UiLayoutModule=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.Ps,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.aw.forChild()],declarations:[_expandable_panel_expandable_panel_component__WEBPACK_IMPORTED_MODULE_0__.z,_sticky_header_sticky_header_component__WEBPACK_IMPORTED_MODULE_1__.L,_anchor_link_anchor_link_directive__WEBPACK_IMPORTED_MODULE_2__.r,_expandable_panel_button_expandable_panel_button_component__WEBPACK_IMPORTED_MODULE_3__.a,_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__.F],exports:[_expandable_panel_expandable_panel_component__WEBPACK_IMPORTED_MODULE_0__.z,_sticky_header_sticky_header_component__WEBPACK_IMPORTED_MODULE_1__.L,_anchor_link_anchor_link_directive__WEBPACK_IMPORTED_MODULE_2__.r,_expandable_panel_button_expandable_panel_button_component__WEBPACK_IMPORTED_MODULE_3__.a,_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__.F]})],UiLayoutModule)},"./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>fromEvent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Observable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),nodeEventEmitterMethods=["addListener","removeListener"],eventTargetMethods=["addEventListener","removeEventListener"],jqueryMethods=["on","off"];function fromEvent(target,eventName,options,resultSelector){if((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(options)&&(resultSelector=options,options=void 0),resultSelector)return fromEvent(target,eventName,options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.Z)(resultSelector));var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.CR)(function isEventTarget(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.addEventListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.removeEventListener)}(target)?eventTargetMethods.map((function(methodName){return function(handler){return target[methodName](eventName,handler,options)}})):function isNodeStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.addListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.removeListener)}(target)?nodeEventEmitterMethods.map(toCommonHandlerRegistry(target,eventName)):function isJQueryStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.on)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(target.off)}(target)?jqueryMethods.map(toCommonHandlerRegistry(target,eventName)):[],2),add=_a[0],remove=_a[1];if(!add&&(0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.z)(target))return(0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.z)((function(subTarget){return fromEvent(subTarget,eventName,options)}))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.Xf)(target));if(!add)throw new TypeError("Invalid event target");return new _Observable__WEBPACK_IMPORTED_MODULE_6__.y((function(subscriber){var handler=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return subscriber.next(1<args.length?args:args[0])};return add(handler),function(){return remove(handler)}}))}function toCommonHandlerRegistry(target,eventName){return function(methodName){return function(handler){return target[methodName](eventName,handler)}}}},"./node_modules/rxjs/dist/esm5/internal/observable/timer.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>timer});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js"),_util_isDate__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isDate.js");function timer(dueTime,intervalOrScheduler,scheduler){void 0===dueTime&&(dueTime=0),void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.P);var intervalDuration=-1;return null!=intervalOrScheduler&&((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.K)(intervalOrScheduler)?scheduler=intervalOrScheduler:intervalDuration=intervalOrScheduler),new _Observable__WEBPACK_IMPORTED_MODULE_2__.y((function(subscriber){var due=(0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.q)(dueTime)?+dueTime-scheduler.now():dueTime;due<0&&(due=0);var n=0;return scheduler.schedule((function(){subscriber.closed||(subscriber.next(n++),0<=intervalDuration?this.schedule(void 0,intervalDuration):subscriber.complete())}),due)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>throttleTime});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function throttleTime(duration,scheduler,config){void 0===scheduler&&(scheduler=scheduler_async.z);var duration$=(0,timer.H)(duration,scheduler);return function throttle(durationSelector,config){return(0,lift.e)((function(source,subscriber){var _a=null!=config?config:{},_b=_a.leading,leading=void 0===_b||_b,_c=_a.trailing,trailing=void 0!==_c&&_c,hasValue=!1,sendValue=null,throttled=null,isComplete=!1,endThrottling=function(){null==throttled||throttled.unsubscribe(),throttled=null,trailing&&(send(),isComplete&&subscriber.complete())},cleanupThrottling=function(){throttled=null,isComplete&&subscriber.complete()},startThrottle=function(value){return throttled=(0,innerFrom.Xf)(durationSelector(value)).subscribe((0,OperatorSubscriber.x)(subscriber,endThrottling,cleanupThrottling))},send=function(){if(hasValue){hasValue=!1;var value=sendValue;sendValue=null,subscriber.next(value),!isComplete&&startThrottle(value)}};source.subscribe((0,OperatorSubscriber.x)(subscriber,(function(value){hasValue=!0,sendValue=value,(!throttled||throttled.closed)&&(leading?send():startThrottle(value))}),(function(){isComplete=!0,(!(trailing&&hasValue&&throttled)||throttled.closed)&&subscriber.complete()})))}))}((function(){return duration$}),config)}},"./node_modules/rxjs/dist/esm5/internal/scheduler/animationFrame.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>animationFrameScheduler});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),AsyncAction=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js"),Subscription=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),animationFrameProvider={schedule:function(callback){var request=requestAnimationFrame,cancel=cancelAnimationFrame,delegate=animationFrameProvider.delegate;delegate&&(request=delegate.requestAnimationFrame,cancel=delegate.cancelAnimationFrame);var handle=request((function(timestamp){cancel=void 0,callback(timestamp)}));return new Subscription.w0((function(){return null==cancel?void 0:cancel(handle)}))},requestAnimationFrame:function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var delegate=animationFrameProvider.delegate;return((null==delegate?void 0:delegate.requestAnimationFrame)||requestAnimationFrame).apply(void 0,(0,tslib_es6.ev)([],(0,tslib_es6.CR)(args)))},cancelAnimationFrame:function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var delegate=animationFrameProvider.delegate;return((null==delegate?void 0:delegate.cancelAnimationFrame)||cancelAnimationFrame).apply(void 0,(0,tslib_es6.ev)([],(0,tslib_es6.CR)(args)))},delegate:void 0},AnimationFrameAction=function(_super){function AnimationFrameAction(scheduler,work){var _this=_super.call(this,scheduler,work)||this;return _this.scheduler=scheduler,_this.work=work,_this}return(0,tslib_es6.ZT)(AnimationFrameAction,_super),AnimationFrameAction.prototype.requestAsyncId=function(scheduler,id,delay){return void 0===delay&&(delay=0),null!==delay&&delay>0?_super.prototype.requestAsyncId.call(this,scheduler,id,delay):(scheduler.actions.push(this),scheduler._scheduled||(scheduler._scheduled=animationFrameProvider.requestAnimationFrame((function(){return scheduler.flush(void 0)}))))},AnimationFrameAction.prototype.recycleAsyncId=function(scheduler,id,delay){var _a;if(void 0===delay&&(delay=0),null!=delay?delay>0:this.delay>0)return _super.prototype.recycleAsyncId.call(this,scheduler,id,delay);var actions=scheduler.actions;null!=id&&(null===(_a=actions[actions.length-1])||void 0===_a?void 0:_a.id)!==id&&(animationFrameProvider.cancelAnimationFrame(id),scheduler._scheduled=void 0)},AnimationFrameAction}(AsyncAction.o),animationFrameScheduler=new(function(_super){function AnimationFrameScheduler(){return null!==_super&&_super.apply(this,arguments)||this}return(0,tslib_es6.ZT)(AnimationFrameScheduler,_super),AnimationFrameScheduler.prototype.flush=function(action){this._active=!0;var flushId=this._scheduled;this._scheduled=void 0;var error,actions=this.actions;action=action||actions.shift();do{if(error=action.execute(action.state,action.delay))break}while((action=actions[0])&&action.id===flushId&&actions.shift());if(this._active=!1,error){for(;(action=actions[0])&&action.id===flushId&&actions.shift();)action.unsubscribe();throw error}},AnimationFrameScheduler}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js").v))(AnimationFrameAction)},"./node_modules/rxjs/dist/esm5/internal/util/isDate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isValidDate(value){return value instanceof Date&&!isNaN(value)}__webpack_require__.d(__webpack_exports__,{q:()=>isValidDate})},"./libs/ui/layout/src/lib/expandable-panel-button/expandable-panel-button.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_expandable_panel_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/layout/src/lib/expandable-panel-button/expandable-panel-button.component.ts"),_ui_layout_module__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/layout/src/lib/ui-layout.module.ts"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Layout/Expandable Panel Button",component:_expandable_panel_button_component__WEBPACK_IMPORTED_MODULE_1__.a,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_ui_layout_module__WEBPACK_IMPORTED_MODULE_2__.P,_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Ps]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`\n<div class='relative p-3' style="max-width: 700px; height:300px">\n  <p>Lorem ipsum dolor sit amet, consect etur adipiscing elit. Donec id condim entum ex. Etiam sed molestie est.</p>\n  ${story}\n</div>`))]},Primary={args:{titleTemplateString:"<mat-icon class='material-symbols-outlined mr-4'>key</mat-icon> Open this menu to find out more"},render:args=>({props:args,template:`\n    <gn-ui-expandable-panel-button [titleTemplate]='title'>\n      <div class='bg-gray-50 p-3'>\n        <p>\n          Illud tamen clausos vehementer angebat quod captis navigiis,\n          quae frumenta vehebant per flumen, Isauri quidem alimentorum\n          copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo\n          inediae propinquantis aerumnas exitialis horrebant.\n        </p><br><br>\n        <p>\n          Illud tamen clausos vehementer angebat quod captis navigiis,\n          quae frumenta vehebant per flumen, Isauri quidem alimentorum\n          copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo\n          inediae propinquantis aerumnas exitialis horrebant.\n        </p><br><br>\n        <p>\n          Illud tamen clausos vehementer angebat quod captis navigiis,\n          quae frumenta vehebant per flumen, Isauri quidem alimentorum\n          copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo\n          inediae propinquantis aerumnas exitialis horrebant.\n        </p>\n      </div>\n    </gn-ui-expandable-panel-button>\n    <ng-template #title>\n      ${args.titleTemplateString}\n    </ng-template>\n`})}},"./libs/ui/layout/src/lib/carousel/carousel.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .carousel-container ::ng-deep > * {\n  flex-shrink: 0;\n}\n:host {\n  position: relative;\n}\n.carousel-step-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 6px;\n  position: relative;\n}\n.carousel-step-dot:after {\n  content: '';\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 14px;\n  height: 14px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/layout/src/lib/expandable-panel-button/expandable-panel-button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  pointer-events: none;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/layout/src/lib/expandable-panel/expandable-panel.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/layout/src/lib/sticky-header/sticky-header.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);