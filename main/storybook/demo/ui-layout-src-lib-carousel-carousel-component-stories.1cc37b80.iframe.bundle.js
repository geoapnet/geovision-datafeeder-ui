(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[2500],{"./libs/ui/layout/src/lib/carousel/carousel.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>CarouselComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,carousel_componentngResource=__webpack_require__("./libs/ui/layout/src/lib/carousel/carousel.component.css?ngResource"),carousel_componentngResource_default=__webpack_require__.n(carousel_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),embla_carousel_esm=__webpack_require__("./node_modules/embla-carousel/embla-carousel.esm.js");let CarouselComponent=((_class=class CarouselComponent{constructor(changeDetector){this.changeDetector=changeDetector,this.containerClass="",this.stepsContainerClass="",this.steps=[],this.selectedStep=-1}ngAfterViewInit(){this.emblaApi=(0,embla_carousel_esm.Z)(this.carouselOverflowContainer.nativeElement,{duration:15});const refreshSteps=()=>{this.steps=this.emblaApi.scrollSnapList(),this.selectedStep=this.emblaApi.selectedScrollSnap(),this.changeDetector.detectChanges()};this.emblaApi.on("init",refreshSteps).on("reInit",refreshSteps).on("select",refreshSteps)}scrollToStep(stepIndex){this.emblaApi.scrollTo(stepIndex)}}).ctorParameters=()=>[{type:core.ChangeDetectorRef}],_class.propDecorators={containerClass:[{type:core.Input}],stepsContainerClass:[{type:core.Input}],carouselOverflowContainer:[{type:core.ViewChild,args:["carouselOverflowContainer"]}]},_class);CarouselComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-carousel",template:'<div #carouselOverflowContainer class="overflow-hidden h-full w-full">\n  <div class="carousel-container flex flex-row" [ngClass]="containerClass">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div\n  class="absolute right-0 top-0 flex flex-row justify-center gap-[10px] p-1"\n  [ngClass]="stepsContainerClass"\n>\n  <button\n    *ngFor="let step of steps; let i = index"\n    class="carousel-step-dot"\n    (click)="scrollToStep(i)"\n    [ngClass]="selectedStep === i ? \'bg-secondary\' : \'bg-gray-400\'"\n  ></button>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[carousel_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ChangeDetectorRef])],CarouselComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./libs/ui/layout/src/lib/carousel/carousel.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _carousel_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/layout/src/lib/carousel/carousel.component.ts"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={component:_carousel_component__WEBPACK_IMPORTED_MODULE_0__.F,title:"Layout/CarouselComponent",decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.componentWrapperDecorator)((story=>`<div class="border border-gray-300 h-[150px] w-[800px] overflow-auto" style="resize: both">${story}</div>`))]},Primary={args:{},render:args=>({props:args,template:"\n    <gn-ui-carousel containerClass='py-4 gap-4 h-full'>\n      <div class='border border-black w-[160px] ml-[calc(50%-80px)]'>\n        First box\n      </div>\n      <div class='border border-black w-[240px]'>\n        Second box\n      </div>\n      <div class='border border-black w-[180px]'>\n        Third box\n      </div>\n      <div class='border border-black w-[120px]'>\n        Fourth box\n      </div>\n      <div class='border border-black w-[280px] mr-[calc(50%-140px)]'>\n        Fifth box\n      </div>\n    </gn-ui-carousel>\n"})}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/layout/src/lib/carousel/carousel.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host .carousel-container ::ng-deep > * {\n  flex-shrink: 0;\n}\n:host {\n  position: relative;\n}\n.carousel-step-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 6px;\n  position: relative;\n}\n.carousel-step-dot:after {\n  content: '';\n  position: absolute;\n  left: -4px;\n  top: -4px;\n  width: 14px;\n  height: 14px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);