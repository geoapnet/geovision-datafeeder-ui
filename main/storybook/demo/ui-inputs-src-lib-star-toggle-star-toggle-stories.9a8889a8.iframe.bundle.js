(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[9165],{"./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>StarToggleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var star_toggle_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.css?ngResource"),star_toggle_componentngResource_default=__webpack_require__.n(star_toggle_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts");let StarToggleComponent=class StarToggleComponent{constructor(){this.disabled=!1,this.newValue=new core.EventEmitter}toggle(event){if(!this.disabled){if(this.toggled=!this.toggled,this.toggled){const anim=this.overlay.nativeElement.getAnimations()[0];anim.cancel(),anim.play()}this.newValue.emit(this.toggled)}(0,src.Yr)(event),event.preventDefault()}static#_=this.propDecorators={toggled:[{type:core.Input}],disabled:[{type:core.Input}],newValue:[{type:core.Output}],overlay:[{type:core.ViewChild,args:["starOverlay"]}]}};StarToggleComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-star-toggle",template:'<div class="inline-block relative align-middle" style="line-height: 0.7em">\n  <button\n    type="button"\n    class="-m-[8px] p-[8px]"\n    (click)="toggle($event)"\n    [ngClass]="{\n      enabled: toggled,\n      \'disabled opacity-45\': !toggled,\n      \'transition hover:scale-125 will-change-transform\': !disabled,\n      \'cursor-default\': disabled\n    }"\n  >\n    <mat-icon\n      class="material-symbols-outlined"\n      [ngClass]="{ \'star-filled\': toggled }"\n      >star</mat-icon\n    >\n  </button>\n  <svg\n    #starOverlay\n    class="star-toggle-overlay"\n    width="40px"\n    height="40px"\n    viewBox="-15 -15 30 30"\n  >\n    <g>\n      <path d="M 0,13.229167 V 0" />\n      <path d="M -12.484186,4.0880377 0,0" />\n      <path d="M -7.6784102,-10.70262 0,0" />\n      <path d="M 7.8734079,-10.70262 0,0" />\n      <path d="M 12.679184,4.0880376 0,0" />\n    </g>\n  </svg>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[star_toggle_componentngResource_default()]})],StarToggleComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>forkJoin});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js");function forkJoin(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.jO)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),sources=_a.args,keys=_a.keys,result=new _Observable__WEBPACK_IMPORTED_MODULE_2__.y((function(subscriber){var length=sources.length;if(length)for(var values=new Array(length),remainingCompletions=length,remainingEmissions=length,_loop_1=function(sourceIndex){var hasValue=!1;(0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Xf)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.x)(subscriber,(function(value){hasValue||(hasValue=!0,remainingEmissions--),values[sourceIndex]=value}),(function(){return remainingCompletions--}),void 0,(function(){remainingCompletions&&hasValue||(remainingEmissions||subscriber.next(keys?(0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.n)(keys,values):values),subscriber.complete())})))},sourceIndex=0;sourceIndex<length;sourceIndex++)_loop_1(sourceIndex);else subscriber.complete()}));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.Z)(resultSelector)):result}},"./libs/ui/inputs/src/lib/star-toggle/star-toggle.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_star_toggle_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/StarToggle",component:_star_toggle_component__WEBPACK_IMPORTED_MODULE_1__.g,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.Hw],imports:[]})]},Primary={args:{toggled:!1,disabled:!1},render:args=>({props:{...args,newValue:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("newValue")}})}},"./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"button.enabled {\n  color: var(--star-toggle-enabled-color, var(--color-secondary));\n}\nbutton.disabled {\n  color: var(--star-toggle-disabled-color, var(--color-primary));\n}\n\nmat-icon {\n  width: 1em;\n  height: 1em;\n  font-size: 1.5em;\n  margin-top: -0.1em;\n  font-variation-settings: 'opsz' 40;\n  stroke: var(--color-primary-darker);\n}\n\n.star-filled {\n  font-variation-settings: 'FILL' 1;\n}\n\n.star-toggle-overlay {\n  stroke: var(--color-secondary);\n  stroke-width: 3.5px;\n  stroke-linecap: round;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  stroke-dasharray: 5 20;\n  stroke-dashoffset: -15;\n  animation: overlay-dash 0.8s cubic-bezier(0.16, 0.66, 0.44, 0.96) forwards;\n  animation-play-state: paused;\n}\n\n@keyframes overlay-dash {\n  to {\n    stroke-dashoffset: 7;\n  }\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);