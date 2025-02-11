(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[362],{"./libs/ui/search/src/lib/facets/facet-list/facet-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>FacetListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var facet_list_componentngResource=__webpack_require__("./libs/ui/search/src/lib/facets/facet-list/facet-list.component.css?ngResource"),facet_list_componentngResource_default=__webpack_require__.n(facet_list_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FacetListComponent=class FacetListComponent{constructor(){this.itemChange=new core.EventEmitter,this.more=new core.EventEmitter,this.filterChange=new core.EventEmitter}getBlockSelectedPaths(model){return this.selectedPaths.filter((path=>{const sPath=JSON.stringify(path),sModelPath=JSON.stringify(model.path),startModelPath=sModelPath.substring(0,sModelPath.length-1);return sPath.startsWith(startModelPath)}))}trackByIndexKey(index,model){return model.key}onItemChange(facetEvent){this.itemChange.emit(facetEvent)}onMore(key){this.more.emit(key)}onFilterChange(field,include){this.filterChange.emit({field,include})}static#_=this.propDecorators={models:[{type:core.Input}],selectedPaths:[{type:core.Input}],itemChange:[{type:core.Output}],more:[{type:core.Output}],filterChange:[{type:core.Output}]}};FacetListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-facet-list",template:'<gn-ui-facet-block\n  *ngFor="let model of models; trackBy: trackByIndexKey"\n  [model]="model"\n  [selectedPaths]="getBlockSelectedPaths(model)"\n  (itemChange)="onItemChange($event)"\n  (filterChange)="onFilterChange(model.key, $event)"\n  (more)="onMore(model.key)"\n></gn-ui-facet-block>\n',styles:[facet_list_componentngResource_default()]})],FacetListComponent)},"./libs/ui/search/src/lib/facets/facet-list/facet-list.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_facet_list_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/search/src/lib/facets/facet-list/facet-list.component.ts"),_fixtures__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./libs/ui/search/src/lib/facets/fixtures/aggregations-model-response.ts"),_facet_item_facet_item_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/search/src/lib/facets/facet-item/facet-item.component.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_facet_block_facet_block_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/search/src/lib/facets/facet-block/facet-block.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/util/i18n/src/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Search/FacetListComponent",component:_facet_list_component__WEBPACK_IMPORTED_MODULE_1__.t,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_facet_item_facet_item_component__WEBPACK_IMPORTED_MODULE_2__.E,_facet_block_facet_block_component__WEBPACK_IMPORTED_MODULE_3__.s],imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_4__.D7,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.h.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_4__.sU),_angular_forms__WEBPACK_IMPORTED_MODULE_6__.YN]})]},Primary={args:{models:[(0,_fixtures__WEBPACK_IMPORTED_MODULE_7__.K2)(),{key:"theme",items:[{value:"Environment",count:12,path:["theme","Environment"]},{value:"Industry",count:6,path:["theme","Industry"]},{value:"Weather",count:3,path:["theme","Weather"]},{value:"Agriculture",count:2,path:["theme","Agriculture"]}],path:["theme"],type:"filters",size:4,more:!1,includeFilter:!0,excludeFilter:!1}],selectedPaths:[["tag","Cyprus"],["tag","Germany"],["theme","Weather"]]},argTypes:{filterChange:{action:"filterChange"},itemChange:{action:"itemChange"},more:{action:"more"}}}},"./libs/ui/search/src/lib/facets/facet-list/facet-list.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);