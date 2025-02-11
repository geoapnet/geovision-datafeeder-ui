(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[6417],{"./libs/ui/elements/src/lib/content-ghost/content-ghost.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>ContentGhostComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var content_ghost_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/content-ghost/content-ghost.component.css?ngResource"),content_ghost_componentngResource_default=__webpack_require__.n(content_ghost_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ContentGhostComponent=class ContentGhostComponent{constructor(){this.ghostClass=""}static#_=this.propDecorators={showContent:[{type:core.Input}],ghostClass:[{type:core.Input}]}};ContentGhostComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-content-ghost",template:'<div\n  *ngIf="!showContent"\n  class="ghost bg-gray-100 rounded-lg relative overflow-hidden {{ ghostClass }}"\n></div>\n<ng-content *ngIf="showContent"></ng-content>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[content_ghost_componentngResource_default()]})],ContentGhostComponent)},"./libs/ui/elements/src/lib/metadata-info/metadata-info.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>MetadataInfoComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var metadata_info_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/metadata-info/metadata-info.component.css?ngResource"),metadata_info_componentngResource_default=__webpack_require__.n(metadata_info_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/util/shared/src/index.ts");let MetadataInfoComponent=class MetadataInfoComponent{constructor(){this.keyword=new core.EventEmitter}get hasUsage(){return!0===this.metadata.extras?.isOpenData||this.metadata.legalConstraints?.length>0&&this.legalConstraints.length>0||this.metadata.otherConstraints?.length>0&&this.otherConstraints.length>0||this.metadata.licenses?.length>0&&this.licenses.length>0}get legalConstraints(){let array=[];return this.metadata.legalConstraints?.length&&(array=array.concat(this.metadata.legalConstraints.filter((c=>c.text)).map((c=>c.text)))),array}get otherConstraints(){let array=[];return this.metadata.otherConstraints?.length&&(array=array.concat(this.metadata.otherConstraints.filter((c=>c.text)).map((c=>c.text)))),array}get licenses(){let array=[];return this.metadata.licenses?.length&&(array=array.concat(this.metadata.licenses.filter((c=>c.text)).map((c=>({text:c.text,url:c.url}))))),array}get updateFrequency(){return this.metadata.updateFrequency instanceof Object?(this.updatedTimes=this.metadata.updateFrequency.updatedTimes,`domain.record.updateFrequency.${this.metadata.updateFrequency.per}`):"string"==typeof this.metadata.updateFrequency?`domain.record.updateFrequency.${this.metadata.updateFrequency}`:void 0}get temporalExtent(){const temporalExtents=this.metadata.temporalExtents;return(0,src.wI)(temporalExtents)}get shownOrganization(){return this.metadata.ownerOrganization}get resourceContact(){return this.metadata.contactsForResource?.[0]}fieldReady(propName){return!this.incomplete||propName in this.metadata}onKeywordClick(keyword){this.keyword.emit(keyword)}static#_=this.propDecorators={metadata:[{type:core.Input}],incomplete:[{type:core.Input}],keyword:[{type:core.Output}]}};MetadataInfoComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-metadata-info",template:'<div class="mb-6 md-description sm:mb-4 sm:pr-16">\n  <gn-ui-content-ghost ghostClass="h-32" [showContent]="fieldReady(\'abstract\')">\n    <gn-ui-max-lines [maxLines]="6" *ngIf="metadata.abstract">\n      <div class="mb-6">\n        <gn-ui-markdown-parser\n          [textContent]="metadata.abstract"\n        ></gn-ui-markdown-parser>\n      </div>\n    </gn-ui-max-lines>\n    <div *ngIf="metadata.keywords?.length">\n      <p class="mt-6 mb-3 font-medium text-primary text-sm" translate>\n        record.metadata.keywords\n      </p>\n      <div class="sm:pb-4 flex flex-wrap gap-2">\n        <gn-ui-badge\n          class="inline-block lowercase"\n          (click)="onKeywordClick(keyword)"\n          [clickable]="true"\n          *ngFor="let keyword of metadata.keywords"\n          >{{ keyword.label }}</gn-ui-badge\n        >\n      </div>\n    </div>\n  </gn-ui-content-ghost>\n</div>\n\n<gn-ui-expandable-panel [title]="\'record.metadata.usage\' | translate">\n  <div class="flex flex-col gap-[10px] mr-4 py-[12px] rounded text-gray-900">\n    <ng-container *ngFor="let license of licenses">\n      <div *ngIf="license.url; else noUrl" class="text-primary">\n        <a\n          [href]="license.url"\n          target="_blank"\n          class="cursor-pointer hover:underline transition-all"\n        >\n          {{ license.text }}\n          <mat-icon\n            class="material-symbols-outlined !w-[12px] !h-[12px] !text-[12px] opacity-75 shrink-0"\n            >open_in_new</mat-icon\n          >\n        </a>\n      </div>\n      <ng-template #noUrl>\n        <div class="text-primary" gnUiLinkify>\n          {{ license.text }}\n        </div>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf="legalConstraints.length">\n      <div class="mb-6">\n        <gn-ui-markdown-parser\n          *ngFor="let constraint of legalConstraints"\n          [textContent]="constraint"\n        >\n        </gn-ui-markdown-parser>\n      </div>\n    </ng-container>\n    <ng-container *ngIf="otherConstraints.length">\n      <div gnUiLinkify *ngFor="let constraint of otherConstraints">\n        <h5 translate class="font-medium text-black text-sm mb-[2px] mt-[16px]">\n          record.metadata.otherConstraints\n        </h5>\n        <div class="mb-6">\n          <gn-ui-markdown-parser [textContent]="constraint">\n          </gn-ui-markdown-parser>\n        </div>\n      </div>\n    </ng-container>\n\n    <span class="noUsage" *ngIf="!hasUsage">\n      {{ \'record.metadata.noUsage\' | translate }}\n    </span>\n  </div>\n</gn-ui-expandable-panel>\n<gn-ui-expandable-panel\n  *ngIf="\n    metadata.lineage ||\n    metadata.recordUpdated ||\n    metadata.updateFrequency ||\n    metadata.status\n  "\n  [title]="\'record.metadata.details\' | translate"\n>\n  <div *ngIf="metadata.lineage" class="text-gray-900 flex flex-col mt-4 gap-2">\n    <p class="whitespace-pre-line break-words text-gray-900" gnUiLinkify>\n      {{ metadata.lineage }}\n    </p>\n  </div>\n  <div class="flex flex-row gap-6 mt-5 mb-8" *ngIf="resourceContact">\n    <div\n      *ngIf="resourceContact.organization?.logoUrl?.href"\n      class="flex items-center justify-center border-solid border border-gray-300 rounded-md bg-white h-32 overflow-hidden"\n    >\n      <gn-ui-thumbnail\n        class="relative h-full w-full"\n        [thumbnailUrl]="resourceContact.organization.logoUrl.href"\n        fit="contain"\n      ></gn-ui-thumbnail>\n    </div>\n    <div class="flex flex-col gap-1">\n      <p class="text-sm font-medium" translate>record.metadata.producer</p>\n      <div\n        class="text-primary font-title text-21 mr-2 cursor-pointer hover:underline"\n        data-cy="organization-name"\n      >\n        {{ resourceContact.organization?.name }}\n      </div>\n      <div *ngIf="resourceContact.organization?.website">\n        <a\n          [href]="resourceContact.organization.website"\n          target="_blank"\n          class="contact-website text-primary text-sm cursor-pointer hover:underline transition-all"\n          >{{ resourceContact.organization.website }}\n          <mat-icon\n            class="material-symbols-outlined !w-[12px] !h-[12px] !text-[12px] opacity-75 shrink-0"\n            >open_in_new</mat-icon\n          >\n        </a>\n      </div>\n      <div class="mt-4" *ngIf="resourceContact.email">\n        <div class="flex">\n          <mat-icon\n            class="material-symbols-outlined !w-5 !h-5 !text-[20px] opacity-75 shrink-0"\n          >\n            mail_outline</mat-icon\n          >\n          <a\n            *ngIf="resourceContact.email"\n            [href]="\'mailto:\' + resourceContact.email"\n            class="text-sm hover:underline ml-2"\n            target="_blank"\n            data-cy="contact-email"\n            >{{ resourceContact?.email }}</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    class="py-6 px-6 rounded bg-gray-100 grid grid-cols-2 gap-y-6 gap-x-[20px] text-gray-700"\n  >\n    <div *ngIf="metadata.recordCreated">\n      <p class="text-sm" translate>record.metadata.creation</p>\n      <p class="text-primary font-medium mt-1">\n        {{ metadata.recordCreated.toLocaleDateString() }}\n      </p>\n    </div>\n    <div *ngIf="metadata.recordPublished">\n      <p class="text-sm" translate>record.metadata.publication</p>\n      <p class="text-primary font-medium mt-1">\n        {{ metadata.recordPublished.toLocaleDateString() }}\n      </p>\n    </div>\n    <div *ngIf="updateFrequency">\n      <p class="text-sm" translate>record.metadata.updateFrequency</p>\n      <p\n        class="text-primary font-medium mt-1 updateFrequency"\n        translate\n        [translateParams]="{ count: updatedTimes }"\n      >\n        {{ updateFrequency }}\n      </p>\n    </div>\n    <div *ngIf="metadata.languages">\n      <p class="text-sm mb-1" translate>record.metadata.languages</p>\n      <div class="flex flex-row gap-1 flex-wrap">\n        <p\n          class="text-primary font-medium"\n          translate\n          *ngFor="let language of metadata.languages"\n        >\n          language.{{ language }}\n        </p>\n      </div>\n    </div>\n    <div *ngIf="temporalExtent">\n      <p class="text-sm" translate>record.metadata.temporalExtent</p>\n      <div class="flex flex-row gap-1 mb-1 text-primary font-medium">\n        <p\n          *ngIf="temporalExtent.start && temporalExtent.end"\n          translate\n          [translateParams]="{\n            start: temporalExtent.start,\n            end: temporalExtent.end\n          }"\n        >\n          record.metadata.temporalExtent.fromDateToDate\n        </p>\n        <p\n          *ngIf="temporalExtent.start && !temporalExtent.end"\n          translate\n          [translateParams]="{ start: temporalExtent.start }"\n        >\n          record.metadata.temporalExtent.sinceDate\n        </p>\n        <p\n          *ngIf="!temporalExtent.start && temporalExtent.end"\n          translate\n          [translateParams]="{ end: temporalExtent.end }"\n        >\n          record.metadata.temporalExtent.untilDate\n        </p>\n      </div>\n    </div>\n  </div>\n</gn-ui-expandable-panel>\n<gn-ui-expandable-panel\n  *ngIf="metadata.landingPage"\n  [title]="\'record.metadata.technical\' | translate"\n>\n  <div class="flex flex-col gap-4 mr-4 py-5 rounded text-gray-700">\n    <div *ngIf="metadata.recordUpdated">\n      <p class="text-sm" translate>record.metadata.updatedOn</p>\n      <p class="text-primary font-medium">\n        {{ metadata.recordUpdated && metadata.recordUpdated.toLocaleString() }}\n      </p>\n    </div>\n    <div *ngIf="metadata.landingPage">\n      <p class="text-sm" translate>record.metadata.sheet</p>\n      <p class="text-primary font-medium" translate>\n        <a [href]="metadata.landingPage" target="_blank">\n          <span class="break-all" gnUiLinkify>{{ metadata.landingPage }}</span>\n        </a>\n      </p>\n    </div>\n    <div *ngIf="metadata.ownerOrganization">\n      <p class="text-sm" translate>record.metadata.owner</p>\n      <p class="text-primary font-medium">\n        {{ metadata.ownerOrganization.name }}\n      </p>\n    </div>\n    <div *ngIf="metadata.uniqueIdentifier">\n      <p class="text-sm" translate>record.metadata.uniqueId</p>\n      <div class="flex flex-row content-align items-end gap-1">\n        <gn-ui-copy-text-button\n          [text]="metadata.uniqueIdentifier"\n          [tooltipText]="\'tooltip.id.copy\' | translate"\n          [displayText]="false"\n        ></gn-ui-copy-text-button>\n        <p class="text-primary font-medium">\n          {{ metadata.uniqueIdentifier }}\n        </p>\n      </div>\n    </div>\n    <div *ngIf="metadata.topics?.length">\n      <p class="text-sm mb-1" translate>record.metadata.topics</p>\n      <div class="sm:pb-4 sm:pr-16">\n        <gn-ui-badge\n          class="inline-block mr-2 mb-2 lowercase"\n          *ngFor="let topic of metadata.topics"\n          >{{ topic }}</gn-ui-badge\n        >\n      </div>\n    </div>\n  </div>\n</gn-ui-expandable-panel>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[metadata_info_componentngResource_default()]})],MetadataInfoComponent)},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-api.js"),exports),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}})},"./node_modules/@storybook/angular/dist/client/public-api.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.raw=exports.forceReRender=exports.configure=exports.storiesOf=void 0;const preview_api_1=__webpack_require__("@storybook/preview-api"),render_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/render.js"),decorateStory_1=__importDefault(__webpack_require__("./node_modules/@storybook/angular/dist/client/decorateStory.js"));__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);const api=(0,preview_api_1.start)(render_1.renderToCanvas,{decorateStory:decorateStory_1.default,render:render_1.render});exports.storiesOf=(kind,m)=>api.clientApi.storiesOf(kind,m).addParameters({renderer:"angular"});exports.configure=(...args)=>api.configure("angular",...args),exports.forceReRender=api.forceReRender,exports.raw=api.clientApi.raw},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"componentWrapperDecorator")&&__webpack_require__.d(__webpack_exports__,{componentWrapperDecorator:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>forkJoin});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js");function forkJoin(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.jO)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),sources=_a.args,keys=_a.keys,result=new _Observable__WEBPACK_IMPORTED_MODULE_2__.y((function(subscriber){var length=sources.length;if(length)for(var values=new Array(length),remainingCompletions=length,remainingEmissions=length,_loop_1=function(sourceIndex){var hasValue=!1;(0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Xf)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__.x)(subscriber,(function(value){hasValue||(hasValue=!0,remainingEmissions--),values[sourceIndex]=value}),(function(){return remainingCompletions--}),void 0,(function(){remainingCompletions&&hasValue||(remainingEmissions||subscriber.next(keys?(0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.n)(keys,values):values),subscriber.complete())})))},sourceIndex=0;sourceIndex<length;sourceIndex++)_loop_1(sourceIndex);else subscriber.complete()}));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.Z)(resultSelector)):result}},"./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>dateTimestampProvider});var dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{n:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.U)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ev)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.CR)(args))):fn(args)}(fn,args)}))}},"./libs/ui/elements/src/lib/metadata-info/metadata-info.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/util/i18n/src/index.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_metadata_info_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/elements/src/lib/metadata-info/metadata-info.component.ts"),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/util/shared/src/index.ts"),_content_ghost_content_ghost_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui/elements/src/lib/content-ghost/content-ghost.component.ts"),_geonetwork_ui_common_fixtures__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/common/fixtures/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/MetadataInfoComponent",component:_metadata_info_component__WEBPACK_IMPORTED_MODULE_2__.d,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({declarations:[_content_ghost_content_ghost_component__WEBPACK_IMPORTED_MODULE_4__.B],imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__.pw,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.aw.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__.fR),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_3__.Lt]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.applicationConfig)({providers:[]})]},Primary={args:{metadata:_geonetwork_ui_common_fixtures__WEBPACK_IMPORTED_MODULE_5__.XQ[0],incomplete:!1}}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./libs/ui/elements/src/lib/content-ghost/content-ghost.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".ghost {\n  min-height: 2rem;\n  min-width: 2rem;\n  overflow: hidden;\n}\n.ghost:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 50%;\n  background-image: linear-gradient(\n    to left,\n    rgba(251, 251, 251, 0.05),\n    rgba(251, 251, 251, 0.3),\n    rgba(251, 251, 251, 0.6),\n    rgba(251, 251, 251, 0.3),\n    rgba(251, 251, 251, 0.05)\n  );\n  animation: loading 1s infinite;\n}\n@keyframes loading {\n  0% {\n    left: -50%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/elements/src/lib/metadata-info/metadata-info.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* Use a standard link style for description, since it can contain html */\n.md-description ::ng-deep a {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n  text-decoration-line: underline;\n}\n.md-description ::ng-deep a:hover {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.info-grid > :nth-last-child(n + 3) {\n  padding-bottom: 10px;\n  border-bottom-width: 1px;\n  border-color: var(--color-gray-300);\n}\n\n:host ::ng-deep gn-ui-copy-text-button button mat-icon {\n  transform: scale(0.8);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);