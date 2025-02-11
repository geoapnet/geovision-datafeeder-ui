(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[5878],{"./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>StarToggleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var star_toggle_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.css?ngResource"),star_toggle_componentngResource_default=__webpack_require__.n(star_toggle_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),ng_icons_material_icons_baseline=__webpack_require__("./node_modules/@ng-icons/material-icons/fesm2022/ng-icons-material-icons-baseline.mjs");let StarToggleComponent=class StarToggleComponent{constructor(){this.disabled=!1,this.newValue=new core.EventEmitter}toggle(event){if(!this.disabled){if(this.toggled=!this.toggled,this.toggled){const anim=this.overlay.nativeElement.getAnimations()[0];anim.cancel(),anim.play()}this.newValue.emit(this.toggled)}(0,src.Y8)(event),event.preventDefault()}static{this.propDecorators={toggled:[{type:core.Input}],disabled:[{type:core.Input}],newValue:[{type:core.Output}],overlay:[{type:core.ViewChild,args:["starOverlay"]}]}}};StarToggleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-star-toggle",template:'<div class="inline-block relative align-middle" style="line-height: 0.7em">\n  <button\n    type="button"\n    class="-m-[8px] p-[8px]"\n    (click)="toggle($event)"\n    [ngClass]="{\n      enabled: toggled,\n      \'disabled opacity-45\': !toggled,\n      \'transition hover:scale-125 will-change-transform\': !disabled,\n      \'cursor-default\': disabled\n    }"\n  >\n    <ng-icon [name]="toggled ? \'matStar\' : \'matStarBorder\'"></ng-icon>\n  </button>\n  <svg\n    #starOverlay\n    class="star-toggle-overlay"\n    width="40px"\n    height="40px"\n    viewBox="-15 -15 30 30"\n  >\n    <g>\n      <path d="M 0,13.229167 V 0" />\n      <path d="M -12.484186,4.0880377 0,0" />\n      <path d="M -7.6784102,-10.70262 0,0" />\n      <path d="M 7.8734079,-10.70262 0,0" />\n      <path d="M 12.679184,4.0880376 0,0" />\n    </g>\n  </svg>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,ng_icons_core.$e],viewProviders:[(0,ng_icons_core.EB)({matStar:ng_icons_material_icons_baseline.ZSj,matStarBorder:ng_icons_material_icons_baseline.TkJ})],styles:[star_toggle_componentngResource_default()]})],StarToggleComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js");exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}($event)"`:`[${key}]="${(0,ComputesTemplateFromComponent_1.formatPropInTemplate)(key)}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/portable-stories.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/portable-stories.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0}),exports.setProjectAnnotations=void 0;const preview_api_1=__webpack_require__("storybook/internal/preview-api"),INTERNAL_DEFAULT_PROJECT_ANNOTATIONS=__importStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"));exports.setProjectAnnotations=function setProjectAnnotations(projectAnnotations){return(0,preview_api_1.setDefaultProjectAnnotations)(INTERNAL_DEFAULT_PROJECT_ANNOTATIONS),(0,preview_api_1.setProjectAnnotations)(projectAnnotations)}},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/util/isObservable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>isObservable});var _Observable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_isFunction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");function isObservable(obj){return!!obj&&(obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.c||(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.lift)&&(0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.T)(obj.subscribe))}},"./libs/ui/inputs/src/lib/star-toggle/star-toggle.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_star_toggle_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/StarToggle",component:_star_toggle_component__WEBPACK_IMPORTED_MODULE_1__.y,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[]})]},Primary={args:{toggled:!1,disabled:!1},render:args=>({props:{...args,newValue:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("newValue")}})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    toggled: false,\n    disabled: false\n  },\n  render: args => ({\n    props: {\n      ...args,\n      newValue: action('newValue')\n    }\n  })\n}",...Primary.parameters?.docs?.source}}}},"./libs/ui/inputs/src/lib/star-toggle/star-toggle.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"button.enabled {\n  color: var(--star-toggle-enabled-color, var(--color-secondary));\n}\nbutton.disabled {\n  color: var(--star-toggle-disabled-color, var(--color-primary));\n}\n\n.star-filled {\n  font-variation-settings: 'FILL' 1;\n}\n\n.star-toggle-overlay {\n  stroke: var(--color-secondary);\n  stroke-width: 3.5px;\n  stroke-linecap: round;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  stroke-dasharray: 5 20;\n  stroke-dashoffset: -15;\n  animation: overlay-dash 0.8s cubic-bezier(0.16, 0.66, 0.44, 0.96) forwards;\n  animation-play-state: paused;\n}\n\n@keyframes overlay-dash {\n  to {\n    stroke-dashoffset: 7;\n  }\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);