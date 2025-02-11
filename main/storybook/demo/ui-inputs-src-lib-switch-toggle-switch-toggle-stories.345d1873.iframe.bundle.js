(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[6394],{"./libs/ui/inputs/src/lib/switch-toggle/switch-toggle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>SwitchToggleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var switch_toggle_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/switch-toggle/switch-toggle.component.css?ngResource"),switch_toggle_componentngResource_default=__webpack_require__.n(switch_toggle_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),button_toggle=__webpack_require__("./node_modules/@angular/material/fesm2022/button-toggle.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs");let SwitchToggleComponent=class SwitchToggleComponent{constructor(){this.ariaLabel="",this.extraClasses="",this.selectedValue=new core.EventEmitter}onChange(selectedOption){this.options.find((option=>option.label===selectedOption.label)).checked=!0,this.selectedValue.emit(selectedOption)}static#_=this.propDecorators={options:[{type:core.Input}],ariaLabel:[{type:core.Input}],extraClasses:[{type:core.Input}],selectedValue:[{type:core.Output}]}};SwitchToggleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-switch-toggle",template:'<mat-button-toggle-group\n  #group="matButtonToggleGroup"\n  multiple="false"\n  class="flex w-full"\n>\n  <mat-button-toggle\n    *ngFor="let option of options"\n    [aria-label]="option.label"\n    [checked]="option.checked"\n    (change)="onChange(option)"\n    [class]="extraClasses"\n    >{{ option.label | translate }}</mat-button-toggle\n  >\n</mat-button-toggle-group>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[button_toggle.Vg,common.CommonModule,ngx_translate_core.h],styles:[switch_toggle_componentngResource_default()]})],SwitchToggleComponent)},"./node_modules/@angular/cdk/fesm2022/collections.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CB:()=>SelectionModel,DQ:()=>_RecycleViewRepeaterStrategy,hx:()=>ArrayDataSource,qS:()=>DataSource,sL:()=>_VIEW_REPEATER_STRATEGY,xn:()=>_DisposeViewRepeaterStrategy,y4:()=>isDataSource});var rxjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js"),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isObservable.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");class DataSource{}function isDataSource(value){return value&&"function"==typeof value.connect&&!(value instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.G)}class ArrayDataSource extends DataSource{constructor(_data){super(),this._data=_data}connect(){return(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.A)(this._data)?this._data:(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this._data)}disconnect(){}}class _DisposeViewRepeaterStrategy{applyChanges(changes,viewContainerRef,itemContextFactory,itemValueResolver,itemViewChanged){changes.forEachOperation(((record,adjustedPreviousIndex,currentIndex)=>{let view,operation;if(null==record.previousIndex){const insertContext=itemContextFactory(record,adjustedPreviousIndex,currentIndex);view=viewContainerRef.createEmbeddedView(insertContext.templateRef,insertContext.context,insertContext.index),operation=1}else null==currentIndex?(viewContainerRef.remove(adjustedPreviousIndex),operation=3):(view=viewContainerRef.get(adjustedPreviousIndex),viewContainerRef.move(view,currentIndex),operation=2);itemViewChanged&&itemViewChanged({context:view?.context,operation,record})}))}detach(){}}class _RecycleViewRepeaterStrategy{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(changes,viewContainerRef,itemContextFactory,itemValueResolver,itemViewChanged){changes.forEachOperation(((record,adjustedPreviousIndex,currentIndex)=>{let view,operation;if(null==record.previousIndex){const viewArgsFactory=()=>itemContextFactory(record,adjustedPreviousIndex,currentIndex);view=this._insertView(viewArgsFactory,currentIndex,viewContainerRef,itemValueResolver(record)),operation=view?1:0}else null==currentIndex?(this._detachAndCacheView(adjustedPreviousIndex,viewContainerRef),operation=3):(view=this._moveView(adjustedPreviousIndex,currentIndex,viewContainerRef,itemValueResolver(record)),operation=2);itemViewChanged&&itemViewChanged({context:view?.context,operation,record})}))}detach(){for(const view of this._viewCache)view.destroy();this._viewCache=[]}_insertView(viewArgsFactory,currentIndex,viewContainerRef,value){const cachedView=this._insertViewFromCache(currentIndex,viewContainerRef);if(cachedView)return void(cachedView.context.$implicit=value);const viewArgs=viewArgsFactory();return viewContainerRef.createEmbeddedView(viewArgs.templateRef,viewArgs.context,viewArgs.index)}_detachAndCacheView(index,viewContainerRef){const detachedView=viewContainerRef.detach(index);this._maybeCacheView(detachedView,viewContainerRef)}_moveView(adjustedPreviousIndex,currentIndex,viewContainerRef,value){const view=viewContainerRef.get(adjustedPreviousIndex);return viewContainerRef.move(view,currentIndex),view.context.$implicit=value,view}_maybeCacheView(view,viewContainerRef){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(view);else{const index=viewContainerRef.indexOf(view);-1===index?view.destroy():viewContainerRef.remove(index)}}_insertViewFromCache(index,viewContainerRef){const cachedView=this._viewCache.pop();return cachedView&&viewContainerRef.insert(cachedView,index),cachedView||null}}class SelectionModel{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(_multiple=!1,initiallySelectedValues,_emitChanges=!0,compareWith){this._multiple=_multiple,this._emitChanges=_emitChanges,this.compareWith=compareWith,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new rxjs__WEBPACK_IMPORTED_MODULE_3__.B,initiallySelectedValues&&initiallySelectedValues.length&&(_multiple?initiallySelectedValues.forEach((value=>this._markSelected(value))):this._markSelected(initiallySelectedValues[0]),this._selectedToEmit.length=0)}select(...values){this._verifyValueAssignment(values),values.forEach((value=>this._markSelected(value)));const changed=this._hasQueuedChanges();return this._emitChangeEvent(),changed}deselect(...values){this._verifyValueAssignment(values),values.forEach((value=>this._unmarkSelected(value)));const changed=this._hasQueuedChanges();return this._emitChangeEvent(),changed}setSelection(...values){this._verifyValueAssignment(values);const oldValues=this.selected,newSelectedSet=new Set(values);values.forEach((value=>this._markSelected(value))),oldValues.filter((value=>!newSelectedSet.has(value))).forEach((value=>this._unmarkSelected(value)));const changed=this._hasQueuedChanges();return this._emitChangeEvent(),changed}toggle(value){return this.isSelected(value)?this.deselect(value):this.select(value)}clear(flushEvent=!0){this._unmarkAll();const changed=this._hasQueuedChanges();return flushEvent&&this._emitChangeEvent(),changed}isSelected(value){return this._selection.has(this._getConcreteValue(value))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(predicate){this._multiple&&this.selected&&this._selected.sort(predicate)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(value){value=this._getConcreteValue(value),this.isSelected(value)||(this._multiple||this._unmarkAll(),this.isSelected(value)||this._selection.add(value),this._emitChanges&&this._selectedToEmit.push(value))}_unmarkSelected(value){value=this._getConcreteValue(value),this.isSelected(value)&&(this._selection.delete(value),this._emitChanges&&this._deselectedToEmit.push(value))}_unmarkAll(){this.isEmpty()||this._selection.forEach((value=>this._unmarkSelected(value)))}_verifyValueAssignment(values){if(values.length>1&&!this._multiple&&("undefined"==typeof ngDevMode||ngDevMode))throw function getMultipleValuesInSingleSelectionError(){return Error("Cannot pass multiple values into SelectionModel with single-value mode.")}()}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(inputValue){if(this.compareWith){for(let selectedValue of this._selection)if(this.compareWith(inputValue,selectedValue))return selectedValue;return inputValue}return inputValue}}class UniqueSelectionDispatcher{constructor(){this._listeners=[]}notify(id,name){for(let listener of this._listeners)listener(id,name)}listen(listener){return this._listeners.push(listener),()=>{this._listeners=this._listeners.filter((registered=>listener!==registered))}}ngOnDestroy(){this._listeners=[]}static#_=this.ɵfac=function UniqueSelectionDispatcher_Factory(t){return new(t||UniqueSelectionDispatcher)};static#_2=this.ɵprov=_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({token:UniqueSelectionDispatcher,factory:UniqueSelectionDispatcher.ɵfac,providedIn:"root"})}("undefined"==typeof ngDevMode||ngDevMode)&&_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](UniqueSelectionDispatcher,[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable,args:[{providedIn:"root"}]}],null,null);const _VIEW_REPEATER_STRATEGY=new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken("_ViewRepeater")},"./node_modules/rxjs/dist/esm5/internal/observable/ConnectableObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>ConnectableObservable});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_Observable__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_Subscription__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),_operators_refCount__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/refCount.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),ConnectableObservable=function(_super){function ConnectableObservable(source,subjectFactory){var _this=_super.call(this)||this;return _this.source=source,_this.subjectFactory=subjectFactory,_this._subject=null,_this._refCount=0,_this._connection=null,(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.S)(source)&&(_this.lift=source.lift),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.C6)(ConnectableObservable,_super),ConnectableObservable.prototype._subscribe=function(subscriber){return this.getSubject().subscribe(subscriber)},ConnectableObservable.prototype.getSubject=function(){var subject=this._subject;return subject&&!subject.isStopped||(this._subject=this.subjectFactory()),this._subject},ConnectableObservable.prototype._teardown=function(){this._refCount=0;var _connection=this._connection;this._subject=this._connection=null,null==_connection||_connection.unsubscribe()},ConnectableObservable.prototype.connect=function(){var _this=this,connection=this._connection;if(!connection){connection=this._connection=new _Subscription__WEBPACK_IMPORTED_MODULE_2__.yU;var subject_1=this.getSubject();connection.add(this.source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__._)(subject_1,void 0,(function(){_this._teardown(),subject_1.complete()}),(function(err){_this._teardown(),subject_1.error(err)}),(function(){return _this._teardown()})))),connection.closed&&(this._connection=null,connection=_Subscription__WEBPACK_IMPORTED_MODULE_2__.yU.EMPTY)}return connection},ConnectableObservable.prototype.refCount=function(){return(0,_operators_refCount__WEBPACK_IMPORTED_MODULE_4__.B)()(this)},ConnectableObservable}(_Observable__WEBPACK_IMPORTED_MODULE_5__.c)},"./node_modules/rxjs/dist/esm5/internal/operators/refCount.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>refCount});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function refCount(){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var connection=null;source._refCount++;var refCounter=(0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__._)(subscriber,void 0,void 0,void 0,(function(){if(!source||source._refCount<=0||0<--source._refCount)connection=null;else{var sharedConnection=source._connection,conn=connection;connection=null,!sharedConnection||conn&&sharedConnection!==conn||sharedConnection.unsubscribe(),subscriber.unsubscribe()}}));source.subscribe(refCounter),refCounter.closed||(connection=source.connect())}))}},"./libs/ui/inputs/src/lib/switch-toggle/switch-toggle.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_switch_toggle_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/inputs/src/lib/switch-toggle/switch-toggle.component.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/i18n/src/index.ts"),_angular_common_http__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/SwitchToggle",component:_switch_toggle_component__WEBPACK_IMPORTED_MODULE_1__.m,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_switch_toggle_component__WEBPACK_IMPORTED_MODULE_1__.m]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_2__.sU)),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.q1)]})]},Primary={args:{options:[{label:"city",checked:!0},{label:"municipality",checked:!1},{label:"state",checked:!1}],extraClasses:"grow"},render:args=>({props:{...args}})}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/inputs/src/lib/switch-toggle/switch-toggle.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --mat-standard-button-toggle-height: 32px;\n}\n\n.mat-button-toggle-group-appearance-standard {\n  background-color: var(--color-gray-200);\n  padding: 4px;\n  display: flex;\n  gap: 4px;\n  border-radius: 8px;\n}\n\n.mat-button-toggle-appearance-standard {\n  color: black;\n  background-color: var(--color-gray-200);\n  border-radius: 4px;\n  border-left: none;\n  font-family: var(--font-family-main);\n}\n\n.mat-button-toggle-appearance-standard.mat-button-toggle-checked {\n  background-color: black;\n  color: var(--color-background);\n}\n\nbutton.mat-button-toggle-button.mat-focus-indicator.mat-button-toggle-label-content {\n  line-height: 32px;\n}\n\n.mat-button-toggle-label-content {\n  line-height: 32px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);