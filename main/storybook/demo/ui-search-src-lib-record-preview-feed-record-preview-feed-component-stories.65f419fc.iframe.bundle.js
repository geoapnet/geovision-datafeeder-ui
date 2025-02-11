(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[387],{"./libs/ui/dataviz/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qe:()=>chart_component.Q,Or:()=>table_component.O,A5:()=>ui_dataviz_module.A,g$:()=>someHabTableItemFixture,ly:()=>tableItemFixture});var ui_dataviz_module=__webpack_require__("./libs/ui/dataviz/src/lib/ui-dataviz.module.ts"),chart_component=__webpack_require__("./libs/ui/dataviz/src/lib/chart/chart.component.ts"),table_component=__webpack_require__("./libs/ui/dataviz/src/lib/table/table.component.ts");const tableItemFixture=()=>[{name:"name 1",id:"id 1",age:15},{name:"name 2",id:"id 2",age:10},{name:"name 3",id:"id 3",age:55}],someHabTableItemFixture=()=>[{name:"France",id:"1",pop:505e5},{name:"Italy",id:"2",pop:155878789655},{name:"UK",id:"3",pop:31522456},{name:"US",id:"4",pop:3215448888}];__webpack_require__("./libs/ui/dataviz/src/lib/figure/figure.component.ts")},"./libs/ui/dataviz/src/lib/chart/chart.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ChartComponent});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var chart_componentngResource=__webpack_require__("./libs/ui/dataviz/src/lib/chart/chart.component.css?ngResource"),chart_componentngResource_default=__webpack_require__.n(chart_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chart=__webpack_require__("./node_modules/chart.js/dist/chart.js");chart.t1.register(chart.A6,chart.E8,chart.PP,chart.kc,chart.ZT,chart.No,chart.FN,chart.P$,chart.Bs,chart.Pz,chart.m_,chart.Jy,chart.s$);let ChartComponent=class ChartComponent{constructor(){this.type="bar",this.dataRaw=[],this.ready=new Promise((resolve=>this.setReady=resolve))}set data(value){this.dataRaw=value}ngAfterViewInit(){this.setReady()}ngOnChanges(){this.refreshChart()}createChart(){return new chart.t1(this.canvasRef.nativeElement,{type:this.getChartType(),data:this.getChartData(),options:this.getOptions()})}getChartData(){const data=this.handlesSecondaryValue()?this.getDataProxy(this.valueProperty,this.secondaryValueProperty):this.getDataProxy(this.valueProperty);return{labels:this.getDataProxy(this.labelProperty),datasets:[{label:this.valueProperty,data}]}}getOptions(){const truncateString=this.truncateString,options={maintainAspectRatio:!1,parsing:{},scales:{x:{ticks:{callback:function(value){return truncateString(this.getLabelForValue(Number(value)),30)}}},y:{ticks:{callback:function(value){return truncateString(this.getLabelForValue(Number(value)),30)}}}}};switch(this.type){case"line-interpolated":return{...options,elements:{line:{cubicInterpolationMode:"monotone"}}};case"bar-horizontal":return{...options,indexAxis:"y"};case"pie":return{...options,scales:{},plugins:{legend:{position:"left",align:"start"}}};default:return options}}truncateString(str,truncateLength){return str?str.length<=truncateLength?str:`${str.slice(0,truncateLength)}...`:""}getChartType(){switch(this.type){case"bar":case"bar-horizontal":return"bar";case"line":case"line-interpolated":return"line";case"scatter":case"pie":return this.type}}handlesSecondaryValue(){return this.secondaryValueProperty&&"scatter"===this.type}getDataProxy(property,secondaryProperty){return new Proxy(this.dataRaw,{get:(target,index)=>"string"!=typeof index||Number.isNaN(parseInt(index))||void 0===target[index]?target[index]:secondaryProperty?{y:target[index][property],x:target[index][secondaryProperty]}:target[index][property]})}refreshChart(){var _this=this;return(0,asyncToGenerator.A)((function*(){_this.chart&&(_this.chart.destroy(),_this.chart=null),yield _this.ready,_this.chart=_this.createChart()}))()}static{this.propDecorators={data:[{type:core.Input}],labelProperty:[{type:core.Input}],valueProperty:[{type:core.Input}],secondaryValueProperty:[{type:core.Input}],type:[{type:core.Input}],canvasRef:[{type:core.ViewChild,args:["chartCanvas"]}]}}};ChartComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,selector:"gn-ui-chart",template:'<div class="h-full flex justify-center items-center p-1">\n  <canvas #chartCanvas></canvas>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[chart_componentngResource_default()]})],ChartComponent)},"./libs/ui/dataviz/src/lib/figure/figure.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>FigureComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var figure_componentngResource=__webpack_require__("./libs/ui/dataviz/src/lib/figure/figure.component.css?ngResource"),figure_componentngResource_default=__webpack_require__.n(figure_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FigureComponent=class FigureComponent{constructor(){this.unit="",this.color="primary"}get textClass(){return"primary"===this.color?"text-primary":"text-secondary"}get bgClass(){return"primary"===this.color?"bg-primary-white":"bg-secondary-white"}static{this.propDecorators={icon:[{type:core.Input}],title:[{type:core.Input}],figure:[{type:core.Input}],unit:[{type:core.Input}],color:[{type:core.Input}]}}};FigureComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-figure",template:'<div\n  class="flex flex-row justify-start items-center overflow-hidden"\n  data-test="figureTitle"\n  [title]="\n    figure.toString() +\n    \' \' +\n    unit +\n    \' \' +\n    (title | translate: { count: figure })\n  "\n>\n  <div\n    class="{{ bgClass }} {{\n      textClass\n    }} text-[1.875em] rounded-full mr-[0.55em] flex justify-center items-center w-[2.2em] h-[2.2em] shrink-0"\n    style="width: 2.2em; height: 2.2em"\n    data-test="icon-container"\n  >\n    <ng-icon class="text-[0.66em]" [name]="icon"> </ng-icon>\n  </div>\n  <div class="shrink overflow-hidden">\n    <div class="figure-block text-[1.5em] text-black">\n      <span class="figure font-medium mr-[0.3em]" data-test="figure">{{\n        figure\n      }}</span>\n      <span class="unit text-[0.665em]">{{ unit }}</span>\n    </div>\n    <div translate class="title truncate" [translateParams]="{ count: figure }">\n      {{ title }}\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[figure_componentngResource_default()]})],FigureComponent)},"./libs/ui/dataviz/src/lib/table/table.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>TableComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_componentngResource=__webpack_require__("./libs/ui/dataviz/src/lib/table/table.component.css?ngResource"),table_componentngResource_default=__webpack_require__.n(table_componentngResource),scrolling=__webpack_require__("./node_modules/@angular/cdk/fesm2022/scrolling.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),sort=__webpack_require__("./node_modules/@angular/material/fesm2022/sort.mjs"),table=__webpack_require__("./node_modules/@angular/material/fesm2022/table.mjs"),ng_table_virtual_scroll=__webpack_require__("./node_modules/ng-table-virtual-scroll/fesm2020/ng-table-virtual-scroll.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs");let TableComponent=class TableComponent{set data(value){this.dataSource=new ng_table_virtual_scroll.ap(value),this.dataSource.sort=this.sort,this.properties=Array.isArray(value)&&value.length?Object.keys(value[0]):[],this.count=value.length}constructor(eltRef){this.eltRef=eltRef,this.selected=new core.EventEmitter}ngAfterViewInit(){this.headerHeight=this.eltRef.nativeElement.querySelector("thead").offsetHeight}scrollToItem(itemId){const row=this.eltRef.nativeElement.querySelector(`#${this.getRowEltId(itemId)}`);this.eltRef.nativeElement.scrollTop=row.offsetTop-this.headerHeight}getRowEltId(id){return"table-item-"+id}static{this.ctorParameters=()=>[{type:core.ElementRef}]}static{this.propDecorators={data:[{type:core.Input}],activeId:[{type:core.Input}],selected:[{type:core.Output}],sort:[{type:core.ViewChild,args:[sort.B4,{static:!0}]}]}}};TableComponent=(0,tslib_es6.Cg)([(0,core.Component)({standalone:!0,imports:[table.tP,sort.NQ,ng_table_virtual_scroll.VL,scrolling.E9,common.NgForOf,ngx_translate_core.h],selector:"gn-ui-table",template:'<div class="border border-gray-300 rounded-lg overflow-hidden bg-white h-full">\n  <cdk-virtual-scroll-viewport\n    tvsItemSize="48"\n    headerHeight="56"\n    style="height: calc(100% - 37px)"\n  >\n    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8" matSort>\n      <ng-container *ngFor="let prop of properties" [matColumnDef]="prop">\n        <th\n          mat-header-cell\n          *matHeaderCellDef\n          mat-sort-header\n          class="text-sm text-black bg-white"\n        >\n          {{ prop }}\n        </th>\n        <td\n          mat-cell\n          *matCellDef="let element"\n          class="whitespace-nowrap pr-1 truncate"\n        >\n          {{ element[prop] }}\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef="properties; sticky: true"></tr>\n      <tr\n        [id]="getRowEltId(row.id)"\n        mat-row\n        *matRowDef="let row; columns: properties"\n        (click)="selected.emit(row)"\n        [class.active]="row.id === activeId"\n      ></tr>\n    </table>\n  </cdk-virtual-scroll-viewport>\n  <div class="text-gray-900 border-t border-gray-300 px-4 py-2 text-sm">\n    <span class="count font-extrabold text-primary">{{ count }}</span\n    >&nbsp;<span translate>table.object.count</span>.\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[table_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],TableComponent)},"./libs/ui/dataviz/src/lib/ui-dataviz.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>UiDatavizModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_figure_figure_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/ui/dataviz/src/lib/figure/figure.component.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs"),_ng_icons_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),_ng_icons_material_icons_baseline__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ng-icons/material-icons/fesm2022/ng-icons-material-icons-baseline.mjs"),_ng_icons_tabler_icons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ng-icons/tabler-icons/fesm2022/ng-icons-tabler-icons.mjs");let UiDatavizModule=class UiDatavizModule{};UiDatavizModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.h.forChild(),_ng_icons_core__WEBPACK_IMPORTED_MODULE_5__.i6.withIcons({matCorporateFare:_ng_icons_material_icons_baseline__WEBPACK_IMPORTED_MODULE_6__.MB9,tablerFolderOpen:_ng_icons_tabler_icons__WEBPACK_IMPORTED_MODULE_7__.B7Z})],providers:[(0,_ng_icons_core__WEBPACK_IMPORTED_MODULE_5__.PG)({size:"1.5em"})],declarations:[_figure_figure_component__WEBPACK_IMPORTED_MODULE_0__.Q],exports:[_figure_figure_component__WEBPACK_IMPORTED_MODULE_0__.Q]})],UiDatavizModule)},"./libs/ui/search/src/lib/record-preview-feed/record-preview-feed.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>RecordPreviewFeedComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var record_preview_feed_componentngResource=__webpack_require__("./libs/ui/search/src/lib/record-preview-feed/record-preview-feed.component.css?ngResource"),record_preview_feed_componentngResource_default=__webpack_require__.n(record_preview_feed_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),record_preview_component=__webpack_require__("./libs/ui/search/src/lib/record-preview/record-preview.component.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs"),duration_relativetimeformat=__webpack_require__("./node_modules/duration-relativetimeformat/index.js"),duration_relativetimeformat_default=__webpack_require__.n(duration_relativetimeformat);let RecordPreviewFeedComponent=class RecordPreviewFeedComponent extends record_preview_component.v{constructor(elementRef,translate){super(elementRef),this.elementRef=elementRef,this.translate=translate,this.timeFormat=new(duration_relativetimeformat_default())(this.translate.currentLang,{})}get hasOrganization(){return!!this.record.ownerOrganization}get hasLogo(){return!!this.record.ownerOrganization?.logoUrl}get hasOnlyPerson(){return!1}get time(){return this.timeFormat.format(this.record.recordCreated,Date.now())}static{this.ctorParameters=()=>[{type:core.ElementRef},{type:ngx_translate_core.c$}]}};RecordPreviewFeedComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-record-preview-feed",template:'<div\n  class="mx-[18px] pl-[18px] pb-[18px] border-solid border-l-2 border-gray-100"\n>\n  <a\n    class="record-container block rounded-lg bg-white border border-white card-shadow"\n    [attr.href]="linkHref"\n    [target]="linkTarget"\n  >\n    <div\n      class="record-header py-4 px-4 border-b border-gray-300 flex flex-row items-center relative transition duration-200"\n    >\n      <div\n        class="absolute w-3 h-3 bg-secondary rounded-full"\n        style="right: calc(100% + 14px)"\n      ></div>\n      <div\n        class="record-header-image border border-gray-300 bg-white rounded-full w-16 h-16 object-contain mr-4 overflow-hidden transition duration-200 shrink-0"\n      >\n        <ng-icon\n          *ngIf="!hasLogo"\n          class="text-gray-200"\n          name="{{ hasOnlyPerson ? \'matFace\' : \'matHomeWorkOutline\' }}"\n          style="width: 42px; height: 42px; font-size: 42px; margin: 10px"\n        ></ng-icon>\n        <gn-ui-thumbnail\n          *ngIf="hasLogo"\n          [thumbnailUrl]="record.ownerOrganization?.logoUrl?.toString()"\n          [fit]="\'contain\'"\n        ></gn-ui-thumbnail>\n      </div>\n      <div class="flex flex-col overflow-hidden items-start">\n        <span\n          *ngIf="hasOrganization"\n          class="font-bold transition duration-200 text-primary truncate max-w-full"\n        >\n          {{ record.ownerOrganization.name }}\n        </span>\n        <span\n          *ngIf="hasOnlyPerson"\n          class="font-bold transition duration-200 text-primary truncate max-w-full"\n        >\n          {{ contact.firstName }} {{ contact.lastName }}\n        </span>\n        <p class="">\n          <span translate [translateParams]="{ time }"\n            >record.was.created.time</span\n          >\n        </p>\n      </div>\n    </div>\n    <div class="pt-5 pb-5 px-10 relative">\n      <div class="absolute top-[0.85em] right-[0.85em]">\n        <ng-container\n          [ngTemplateOutlet]="favoriteTemplate"\n          [ngTemplateOutletContext]="{ $implicit: record }"\n        ></ng-container>\n      </div>\n      <h1\n        class="font-title text-black text-[21px] font-medium mb-3 pr-8"\n        data-cy="recordTitle"\n      >\n        {{ record.title }}\n      </h1>\n      <p class="line-clamp-3">{{ abstract }}</p>\n      <gn-ui-thumbnail\n        *ngIf="record.overviews?.[0]"\n        class="block mt-3 w-full h-[136px] border border-gray-100 rounded-lg overflow-hidden"\n        [thumbnailUrl]="record.overviews?.[0]?.url.toString()"\n      ></gn-ui-thumbnail>\n      <div class="flex flex-row mt-3" *ngIf="isDownloadable || isViewable">\n        <ng-icon\n          *ngIf="isDownloadable"\n          class="text-primary opacity-45 mr-3"\n          name="matCloudDownloadOutline"\n        >\n        </ng-icon>\n        <ng-icon\n          *ngIf="isViewable"\n          class="text-primary opacity-45 mr-3"\n          name="matMapOutline"\n        >\n        </ng-icon>\n      </div>\n    </div>\n  </a>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[record_preview_feed_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef,ngx_translate_core.c$])],RecordPreviewFeedComponent)},"./libs/ui/search/src/lib/record-preview/record-preview.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>RecordPreviewComponent});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/util/shared/src/index.ts"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");let RecordPreviewComponent=class RecordPreviewComponent{get isViewable(){return this.record.extras?.hasMaps}get isDownloadable(){return this.record.extras?.hasDownloads}get contact(){return this.record.contactsForResource?.[0]||this.record.contacts[0]}get organization(){return this.record.ownerOrganization}constructor(elementRef){this.elementRef=elementRef,this.linkTarget="_blank",this.linkHref=null,this.mdSelect=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter,this.subscription=new rxjs__WEBPACK_IMPORTED_MODULE_2__.yU}ngOnInit(){this.abstract=(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_0__.KE)((0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_0__.QZ)(this.record?.abstract)),this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.R)(this.elementRef.nativeElement,"click").subscribe((event=>{event.preventDefault(),(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_0__.Y8)(event),this.mdSelect.emit(this.record)})))}ngOnDestroy(){this.subscription.unsubscribe()}static{this.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef}]}static{this.propDecorators={record:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],linkTarget:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],favoriteTemplate:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],linkHref:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],metadataQualityDisplay:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],mdSelect:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}}};RecordPreviewComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"gn-ui-record-preview",template:""}),(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Sn)("design:paramtypes",[_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef])],RecordPreviewComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/basiclightbox/dist/basicLightbox.min.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){if(!u&&__webpack_require__("./node_modules/basiclightbox/dist sync recursive"))return require(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i=void 0,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i,t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)},"./node_modules/duration-relativetimeformat/index.js":module=>{const day=864e5,Intervals=[["year",31536e6],["month",2592e6],["week",6048e5],["day",day],["hour",36e5],["minute",6e4],["second",1e3],["millisecond",1]];class Duration{constructor(lang,{numeric="auto",localeMatcher="best fit",style="long"}={}){this.rtf=new Intl.RelativeTimeFormat(lang,{numeric,localeMatcher,style})}lookup(from,to){const delta=Math.abs(to-from),sign=Math.sign(to-from),years=Math.round(delta/Duration.year);if(years>1)return[sign*years,"year"];const year=Math.abs(to.getFullYear()-from.getFullYear()),months=Math.round(delta/Duration.month);if(months>4)return[sign*year,"year"];if(months>1)return[sign*months,"month"];const month=Math.abs(to.getMonth()-from.getMonth()),weeks=Math.round(delta/Duration.week);if(weeks>3)return[sign*month,"month"];if(weeks>1)return[sign*weeks,"week"];const weekDist=(to.getDay()||7)-(from.getDay()||7),week=Math.abs(weekDist)>4?0:1,days=Math.round(delta/Duration.day);if(days>4)return[sign*week,"week"];if(days>1)return[sign*days,"day"];const day=Math.abs(to.getDate()-from.getDate()),hours=Math.round(delta/Duration.hour);if(hours>12)return[sign*day,"day"];if(hours>1)return[sign*hours,"hour"];const hour=Math.abs(to.getHours()-from.getHours()),minutes=Math.round(delta/Duration.minute);if(minutes>40)return[sign*hour,"hour"];const minute=Math.abs(to.getMinutes()-from.getMinutes()),seconds=Math.round(delta/Duration.second);return minutes>1?[sign*minutes,"minute"]:seconds>20?[sign*minute,"minute"]:[0,"second"]}format(to,from=new Date){to instanceof Date||(to=new Date(to)),from instanceof Date||(from=new Date(from));const[val,unit]=this.lookup(from,to);return this.rtf.format(val,unit)}}Intervals.forEach((([unit,val])=>Duration[unit]=val)),module.exports=Duration},"./libs/ui/search/src/lib/record-preview-feed/record-preview-feed.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_geonetwork_ui_ui_elements__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/elements/src/index.ts"),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/util/shared/src/index.ts"),_record_preview_feed_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/search/src/lib/record-preview-feed/record-preview-feed.component.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/util/i18n/src/index.ts"),_geonetwork_ui_ui_dataviz__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/ui/dataviz/src/index.ts"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_geonetwork_ui_common_fixtures__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./libs/common/fixtures/src/index.ts"),_ng_icons_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),_ng_icons_material_icons_baseline__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@ng-icons/material-icons/fesm2022/ng-icons-material-icons-baseline.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Search/RecordPreviewFeedComponent",component:_record_preview_feed_component__WEBPACK_IMPORTED_MODULE_3__.p,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_5__.sU),_geonetwork_ui_ui_dataviz__WEBPACK_IMPORTED_MODULE_6__.A5,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_2__.ek,_ng_icons_core__WEBPACK_IMPORTED_MODULE_9__.Uq,_geonetwork_ui_ui_elements__WEBPACK_IMPORTED_MODULE_1__.Yg]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.importProvidersFrom)(_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.q1,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule),(0,_ng_icons_core__WEBPACK_IMPORTED_MODULE_9__.EB)({matStar:_ng_icons_material_icons_baseline__WEBPACK_IMPORTED_MODULE_13__.ZSj}),(0,_ng_icons_core__WEBPACK_IMPORTED_MODULE_9__.PG)({size:"0.9em"})]})]},Primary={args:{record:(0,_geonetwork_ui_common_fixtures__WEBPACK_IMPORTED_MODULE_7__._K)()[0],linkTarget:"_blank",favoriteTemplateString:'<a href title="Mark \'{{record.title}}\' as favorite">\n    1234 <ng-icon name="matStar" class="align-middle"></ng-icon>\n  </a>'},render:args=>({props:{...args,mdSelect:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.XI)("mdSelect")},template:`<gn-ui-record-preview-feed\n      [record]='record'\n      [linkTarget]='linkTarget'\n      (mdSelect)='mdSelect'\n      [favoriteTemplate]='favorite'>\n    </gn-ui-record-preview-feed>\n    <ng-template #favorite let-record>${args.favoriteTemplateString}</ng-template>`})},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    record: datasetRecordsFixture()[0] as CatalogRecord,\n    linkTarget: '_blank',\n    favoriteTemplateString: `<a href title=\"Mark '{{record.title}}' as favorite\">\n    1234 <ng-icon name=\"matStar\" class=\"align-middle\"></ng-icon>\n  </a>`\n  },\n  render: args => ({\n    props: {\n      ...args,\n      mdSelect: action('mdSelect')\n    },\n    template: `<gn-ui-record-preview-feed\n      [record]='record'\n      [linkTarget]='linkTarget'\n      (mdSelect)='mdSelect'\n      [favoriteTemplate]='favorite'>\n    </gn-ui-record-preview-feed>\n    <ng-template #favorite let-record>${args.favoriteTemplateString}</ng-template>`\n  })\n}",...Primary.parameters?.docs?.source}}}},"./libs/ui/dataviz/src/lib/chart/chart.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/dataviz/src/lib/figure/figure.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inherit;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/dataviz/src/lib/table/table.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"table {\n  width: 100%;\n  background: white;\n}\nth.mat-mdc-header-cell,\ntd.mat-mdc-cell,\ntd.mat-mdc-footer-cell {\n  padding-right: 20px;\n}\ntr.mat-mdc-row,\ntr.mat-mdc-footer-row {\n  height: 36px;\n}\ntr:hover {\n  background: whitesmoke;\n}\ntr.mat-mdc-header-row {\n  height: 48px;\n}\n\n[mat-header-cell] {\n  color: #0000008a;\n  font-size: 12px;\n  font-weight: 500;\n}\ntr {\n  cursor: pointer;\n}\n\n.active .mat-mdc-cell {\n  color: var(--color-primary);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/search/src/lib/record-preview-feed/record-preview-feed.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".record-container:hover .record-header,\n.record-container:hover .record-header-image {\n  border-color: var(--color-primary-lightest);\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);