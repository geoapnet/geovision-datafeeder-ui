(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[2737],{"./libs/feature/map/src/lib/feature-info/feature-info.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>FeatureInfoService});var _class,tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js"),_manager_map_manager_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/feature/map/src/lib/manager/map-manager.service.ts"),_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/feature/map/src/lib/utils/map-utils.service.ts");let FeatureInfoService=((_class=class FeatureInfoService{constructor(manager,mapUtils){this.manager=manager,this.mapUtils=mapUtils,this.features$=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter}handleFeatureInfo(){const{map}=this.manager;map.on("click",(event=>{const featuresObservablesArray=[...this.mapUtils.getGFIFeaturesObservablesFromClick(map,event),(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.mapUtils.getVectorFeaturesFromClick(map,event))];(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.D)(...featuresObservablesArray).subscribe((featuresArrays=>{const allFeatures=featuresArrays.reduce(((outputFeatures,features)=>[...outputFeatures,...features]),[]);this.features$.emit(allFeatures)}))}))}}).ctorParameters=()=>[{type:_manager_map_manager_service__WEBPACK_IMPORTED_MODULE_0__.L},{type:_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_1__.fD}],_class);FeatureInfoService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({providedIn:"root"}),(0,tslib__WEBPACK_IMPORTED_MODULE_5__.w6)("design:paramtypes",[_manager_map_manager_service__WEBPACK_IMPORTED_MODULE_0__.L,_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_1__.fD])],FeatureInfoService)},"./libs/feature/map/src/lib/manager/map-manager.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>MapManagerService});var _class,tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/feature/map/src/lib/utils/map-utils.service.ts");let MapManagerService=((_class=class MapManagerService{constructor(utils){this.utils=utils,this.map=this.utils.createEmptyMap()}}).ctorParameters=()=>[{type:_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_0__.fD}],_class);MapManagerService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({providedIn:"root"}),(0,tslib__WEBPACK_IMPORTED_MODULE_1__.w6)("design:paramtypes",[_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_0__.fD])],MapManagerService)},"./libs/feature/map/src/lib/map-context/component/map-context.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>MapContextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,map_context_componentngResource=__webpack_require__("./libs/feature/map/src/lib/map-context/component/map-context.component.css?ngResource"),map_context_componentngResource_default=__webpack_require__.n(map_context_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),map_utils_service=__webpack_require__("./libs/feature/map/src/lib/utils/map-utils.service.ts"),feature_info_service=__webpack_require__("./libs/feature/map/src/lib/feature-info/feature-info.service.ts"),map_manager_service=__webpack_require__("./libs/feature/map/src/lib/manager/map-manager.service.ts"),map_context_service=__webpack_require__("./libs/feature/map/src/lib/map-context/map-context.service.ts");let MapContextComponent=((_class=class MapContextComponent{constructor(service,featureInfo,manager,utils){this.service=service,this.featureInfo=featureInfo,this.manager=manager,this.utils=utils,this.featureClicked=new core.EventEmitter,this.map=manager.map}ngOnChanges(){this.context?.view&&(this.context.view.extent&&!this.map.getSize()?this.map.once("change:size",(()=>{this.service.resetMapFromContext(this.map,this.context,this.mapConfig)})):this.service.resetMapFromContext(this.map,this.context,this.mapConfig))}}).ctorParameters=()=>[{type:map_context_service.$i},{type:feature_info_service.K},{type:map_manager_service.L},{type:map_utils_service.fD}],_class.propDecorators={context:[{type:core.Input}],mapConfig:[{type:core.Input}],featureClicked:[{type:core.Output}]},_class);MapContextComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-map-context",template:'<gn-ui-map [map]="map"></gn-ui-map>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[map_context_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[map_context_service.$i,feature_info_service.K,map_manager_service.L,map_utils_service.fD])],MapContextComponent)},"./libs/feature/map/src/lib/map-context/map-context.model.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var MapContextLayerTypeEnum;__webpack_require__.d(__webpack_exports__,{K:()=>MapContextLayerTypeEnum}),function(MapContextLayerTypeEnum){MapContextLayerTypeEnum.XYZ="xyz",MapContextLayerTypeEnum.WMS="wms",MapContextLayerTypeEnum.WMTS="wmts",MapContextLayerTypeEnum.WFS="wfs",MapContextLayerTypeEnum.GEOJSON="geojson"}(MapContextLayerTypeEnum||(MapContextLayerTypeEnum={}))},"./libs/feature/map/src/lib/map-context/map-context.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$i:()=>MapContextService,SL:()=>DEFAULT_BASELAYER_CONTEXT});var _class,tslib__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_style_map_style_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/feature/map/src/lib/style/map-style.service.ts"),_map_context_model__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/feature/map/src/lib/map-context/map-context.model.ts"),ol_View__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/ol/View.js"),ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ol/layer/Vector.js"),ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/ol/source/TileWMS.js"),ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/ol/layer/Tile.js"),ol_source_XYZ__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/ol/source/XYZ.js"),ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/ol/source/Vector.js"),ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/ol/format/GeoJSON.js"),_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/feature/map/src/lib/utils/map-utils.service.ts"),ol_loadingstrategy__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/ol/loadingstrategy.js"),ol_proj__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ol/proj.js"),ol_source_WMTS__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/ol/source/WMTS.js"),_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/util/shared/src/index.ts");const DEFAULT_BASELAYER_CONTEXT={type:_map_context_model__WEBPACK_IMPORTED_MODULE_1__.K.XYZ,urls:["https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png","https://b.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png","https://c.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"]},DEFAULT_VIEW={center:[0,15],zoom:2};let MapContextService=((_class=class MapContextService{constructor(mapUtils,styleService){this.mapUtils=mapUtils,this.styleService=styleService}resetMapFromContext(map,mapContext,mapConfig){return mapConfig&&(mapContext=this.mergeMapConfigWithContext(mapContext,mapConfig)),mapContext.view?.extent||mapContext.view?.center&&mapContext.view?.zoom||(mapContext.view=this.getFallbackView(mapConfig)),map.setView(this.createView(mapContext.view,map)),map.getLayers().clear(),mapContext.layers.forEach((layer=>map.addLayer(this.createLayer(layer)))),map}createLayer(layerModel){const{type}=layerModel,style=this.styleService.styles.default;switch(type){case _map_context_model__WEBPACK_IMPORTED_MODULE_1__.K.XYZ:return new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__.Z({source:new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_6__.Z({url:"url"in layerModel?layerModel.url:void 0,urls:"urls"in layerModel?layerModel.urls:void 0})});case _map_context_model__WEBPACK_IMPORTED_MODULE_1__.K.WMS:return new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__.Z({source:new ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_7__.Z({url:(0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_4__.Q)(layerModel.url,["request","service"]),params:{LAYERS:layerModel.name},gutter:20})});case _map_context_model__WEBPACK_IMPORTED_MODULE_1__.K.WMTS:return new ol_layer_Tile__WEBPACK_IMPORTED_MODULE_5__.Z({source:new ol_source_WMTS__WEBPACK_IMPORTED_MODULE_8__.Z(layerModel.options)});case _map_context_model__WEBPACK_IMPORTED_MODULE_1__.K.WFS:return new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__.Z({source:new ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__.Z({format:new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_11__.Z,url:function(extent){const urlObj=new URL((0,_geonetwork_ui_util_shared__WEBPACK_IMPORTED_MODULE_4__.Q)(layerModel.url,["service","version","request"]));return urlObj.searchParams.set("service","WFS"),urlObj.searchParams.set("version","1.1.0"),urlObj.searchParams.set("request","GetFeature"),urlObj.searchParams.set("outputFormat","application/json"),urlObj.searchParams.set("typename",layerModel.name),urlObj.searchParams.set("srsname","EPSG:3857"),urlObj.searchParams.set("bbox",`${extent.join(",")},EPSG:3857`),urlObj.toString()},strategy:ol_loadingstrategy__WEBPACK_IMPORTED_MODULE_12__.VW}),style});case _map_context_model__WEBPACK_IMPORTED_MODULE_1__.K.GEOJSON:if("url"in layerModel)return new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__.Z({source:new ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__.Z({format:new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_11__.Z,url:layerModel.url}),style});{let geojson=layerModel.data;if("string"==typeof geojson)try{geojson=JSON.parse(geojson)}catch(e){console.warn("A layer could not be created",layerModel,e),geojson={type:"FeatureCollection",features:[]}}const features=this.mapUtils.readFeatureCollection(geojson);return new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_9__.Z({source:new ol_source_Vector__WEBPACK_IMPORTED_MODULE_10__.Z({features}),style})}default:throw new Error(`Unrecognized layer type: ${layerModel.type}`)}}createView(viewModel,map){const{center:centerInViewProj,zoom,maxZoom,maxExtent}=viewModel,center=centerInViewProj?(0,ol_proj__WEBPACK_IMPORTED_MODULE_3__.mi)(centerInViewProj,"EPSG:3857"):[0,0],view=new ol_View__WEBPACK_IMPORTED_MODULE_13__.ZP({center,zoom,maxZoom,extent:maxExtent,multiWorld:!1,constrainResolution:!0});return viewModel.extent&&map&&view.fit(viewModel.extent,{size:map.getSize()}),view}mergeMapConfigWithContext(mapContext,mapConfig){return{...mapContext,view:{...mapContext.view,...mapConfig.MAX_ZOOM&&{maxZoom:mapConfig.MAX_ZOOM},...mapConfig.MAX_EXTENT&&{maxExtent:mapConfig.MAX_EXTENT}},layers:[...mapConfig.DO_NOT_USE_DEFAULT_BASEMAP?[]:[DEFAULT_BASELAYER_CONTEXT],...mapConfig.MAP_LAYERS.map(this.getContextLayerFromConfig),...mapContext.layers]}}getFallbackView(mapConfig){return mapConfig?.MAX_EXTENT?{extent:mapConfig.MAX_EXTENT}:DEFAULT_VIEW}getContextLayerFromConfig(config){switch(config.TYPE){case"wms":return{type:"wms",url:config.URL,name:config.NAME};case"wfs":return{type:"wfs",url:config.URL,name:config.NAME};case"xyz":return{type:config.TYPE,url:config.URL,name:config.NAME};case"geojson":return{type:config.TYPE,...config.DATA?{data:config.DATA}:{url:config.URL}}}}}).ctorParameters=()=>[{type:_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_2__.fD},{type:_style_map_style_service__WEBPACK_IMPORTED_MODULE_0__.Y}],_class);MapContextService=(0,tslib__WEBPACK_IMPORTED_MODULE_14__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)({providedIn:"root"}),(0,tslib__WEBPACK_IMPORTED_MODULE_14__.w6)("design:paramtypes",[_utils_map_utils_service__WEBPACK_IMPORTED_MODULE_2__.fD,_style_map_style_service__WEBPACK_IMPORTED_MODULE_0__.Y])],MapContextService)},"./libs/feature/map/src/lib/style/map-style.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>MapStyleService});var tslib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_geonetwork_ui_util_app_config__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/util/app-config/src/index.ts"),chroma_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/chroma-js/chroma.js"),chroma_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_1__),ol_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/ol/style/Style.js"),ol_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ol/style/Fill.js"),ol_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ol/style/Stroke.js"),ol_style_Circle__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/ol/style/Circle.js");let MapStyleService=class MapStyleService{constructor(){this.styles={default:this.createStyleFunction(this.createGeometryStyles({color:(0,_geonetwork_ui_util_app_config__WEBPACK_IMPORTED_MODULE_0__.P0)()?(0,_geonetwork_ui_util_app_config__WEBPACK_IMPORTED_MODULE_0__.Is)().PRIMARY_COLOR:"blue"})),defaultHL:this.createStyleFunction(this.createGeometryStyles({color:(0,_geonetwork_ui_util_app_config__WEBPACK_IMPORTED_MODULE_0__.P0)()?(0,_geonetwork_ui_util_app_config__WEBPACK_IMPORTED_MODULE_0__.Is)().SECONDARY_COLOR:"red",isFocused:!0}))}}createGeometryStyles(options){const{color,isFocused}=options,zIndex=isFocused?10:void 0;return{polygon:new ol_style__WEBPACK_IMPORTED_MODULE_2__.ZP({fill:new ol_style__WEBPACK_IMPORTED_MODULE_3__.Z({color:this.computeTransparentFillColor(color)}),stroke:new ol_style__WEBPACK_IMPORTED_MODULE_4__.Z({color:"white",width:2}),zIndex}),point:new ol_style__WEBPACK_IMPORTED_MODULE_2__.ZP({image:new ol_style_Circle__WEBPACK_IMPORTED_MODULE_5__.Z({fill:new ol_style__WEBPACK_IMPORTED_MODULE_3__.Z({color}),stroke:new ol_style__WEBPACK_IMPORTED_MODULE_4__.Z({color:"white",width:isFocused?3:2}),radius:isFocused?8:7}),zIndex}),line:[new ol_style__WEBPACK_IMPORTED_MODULE_2__.ZP({stroke:new ol_style__WEBPACK_IMPORTED_MODULE_4__.Z({color:"white",width:isFocused?8:6}),zIndex}),new ol_style__WEBPACK_IMPORTED_MODULE_2__.ZP({stroke:new ol_style__WEBPACK_IMPORTED_MODULE_4__.Z({color,width:isFocused?3:2}),zIndex})]}}createStyleFunction(styleByGeometryType){return feature=>{const geometryType=feature?.getGeometry()?.getType();switch(geometryType){case"LinearRing":case"LineString":case"MultiLineString":return styleByGeometryType.line;case"Point":case"MultiPoint":default:return styleByGeometryType.point;case"Circle":case"Polygon":case"MultiPolygon":return styleByGeometryType.polygon}}}computeTransparentFillColor(color,alpha=.25){return chroma_js__WEBPACK_IMPORTED_MODULE_1___default()(color).alpha(alpha).css()}};MapStyleService=(0,tslib__WEBPACK_IMPORTED_MODULE_6__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({providedIn:"root"})],MapStyleService)},"./libs/feature/map/src/lib/utils/map-utils-wms.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>MapUtilsWMSService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dist=__webpack_require__("./node_modules/@camptocamp/ogc-client/dist/index.js"),src=__webpack_require__("./libs/util/shared/src/index.ts"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");const LONLAT_CRS_CODES=["EPSG:4326","CRS:84"];var _class;let MapUtilsWMSService=((_class=class MapUtilsWMSService{constructor(proxy){this.proxy=proxy}getCapabilities(layer){return(0,from.D)(new dist.us(this.proxy.getProxiedUrl(layer.url)).isReady())}getLayerFull(layer){return this.getCapabilities(layer).pipe((0,map.U)((endpoint=>endpoint.getLayerByName(layer.name))))}getLayerLonLatBBox(layer){return this.getLayerFull(layer).pipe((0,map.U)((wmsLayerFull=>this.getLonLatBBox(wmsLayerFull))))}getLonLatBBox(wmsLayerFull){const{boundingBoxes}=wmsLayerFull,lonLatCRS=Object.keys(boundingBoxes)?.find((crs=>LONLAT_CRS_CODES.includes(crs)));if(lonLatCRS)return boundingBoxes[lonLatCRS]}}).ctorParameters=()=>[{type:src.yn}],_class);MapUtilsWMSService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"}),(0,tslib_es6.w6)("design:paramtypes",[src.yn])],MapUtilsWMSService)},"./libs/feature/map/src/lib/utils/map-utils.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{fD:()=>MapUtilsService});var _class,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ol_extent__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/ol/extent.js"),ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/ol/format/GeoJSON.js"),ol_Map__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/ol/Map.js"),ol_proj__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ol/proj.js"),ol_source_ImageWMS__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/ol/source/ImageWMS.js"),ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/ol/source/TileWMS.js"),ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/ol/source/Vector.js"),ol_source_WMTS__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/ol/source/WMTS.js"),ol_interaction__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/ol/interaction.js"),ol_interaction__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/ol/interaction/DragPan.js"),ol_interaction__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/ol/interaction/MouseWheelZoom.js"),ol_events_condition__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/ol/events/condition.js"),ol_format_WMTSCapabilities__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/ol/format/WMTSCapabilities.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),_map_utils_wms_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/feature/map/src/lib/utils/map-utils-wms.service.ts");let MapUtilsService=((_class=class MapUtilsService{constructor(http,wmsUtils){this.http=http,this.wmsUtils=wmsUtils,this.readFeatureCollection=(featureCollection,featureProjection="EPSG:3857",dataProjection="EPSG:4326")=>(new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_2__.Z).readFeatures(featureCollection,{featureProjection,dataProjection})}createEmptyMap(){return new ol_Map__WEBPACK_IMPORTED_MODULE_3__.Z({controls:[],pixelRatio:1})}isWMSLayer(layer){return layer.getSource()instanceof ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_4__.Z||layer.getSource()instanceof ol_source_ImageWMS__WEBPACK_IMPORTED_MODULE_5__.Z}getGFIUrl(layer,map,coordinate){const view=map.getView(),projection=view.getProjection(),resolution=view.getResolution(),source=layer.getSource(),params={...source.getParams(),INFO_FORMAT:"application/json"};return source.getFeatureInfoUrl(coordinate,resolution,projection,params)}getVectorFeaturesFromClick(olMap,event){const features=[],hit=olMap.forEachFeatureAtPixel(event.pixel,(feature=>feature),{layerFilter:layer=>layer.getSource()instanceof ol_source_Vector__WEBPACK_IMPORTED_MODULE_6__.Z});return hit&&features.push(hit),features}getGFIFeaturesObservablesFromClick(olMap,event){const wmsLayers=olMap.getLayers().getArray().filter(this.isWMSLayer);if(wmsLayers.length>0){const{coordinate}=event;return wmsLayers.reduce(((urls,layer)=>[...urls,this.getGFIUrl(layer,olMap,coordinate)]),[]).map((url=>this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.U)((collection=>this.readFeatureCollection(collection))))))}return[]}getLayerExtent(layer){let geographicExtent;if(layer&&"geojson"===layer.type&&"data"in layer&&"object"==typeof layer.data&&layer.data.features[0]&&layer.data.features[0].geometry)geographicExtent=(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(layer.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.U)((layerData=>(new ol_format_GeoJSON__WEBPACK_IMPORTED_MODULE_2__.Z).readFeatures(layerData).map((feature=>feature.getGeometry())).filter((geom=>!!geom)).reduce(((prev,curr)=>prev?(0,ol_extent__WEBPACK_IMPORTED_MODULE_9__.l7)(prev,curr.getExtent()):curr.getExtent()),null))));else{if(!layer||"wms"!==layer.type)return layer&&"wmts"===layer.type?(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(layer.options.tileGrid.getExtent()):(0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(null);geographicExtent=this.wmsUtils.getLayerLonLatBBox(layer)}return geographicExtent.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.U)((extent=>[...(0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.mi)([extent[0],extent[1]],"EPSG:3857"),...(0,ol_proj__WEBPACK_IMPORTED_MODULE_0__.mi)([extent[2],extent[3]],"EPSG:3857")])),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.U)((extent=>(0,ol_extent__WEBPACK_IMPORTED_MODULE_9__.xb)(extent)?null:extent)))}getWmtsOptionsFromCapabilities(link){const getCapabilitiesUrl=new URL(link.url,window.location.toString());return getCapabilitiesUrl.searchParams.set("SERVICE","WMTS"),getCapabilitiesUrl.searchParams.set("REQUEST","GetCapabilities"),(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.D)(fetch(getCapabilitiesUrl.toString()).then(function(){var _ref=(0,_home_runner_work_geonetwork_ui_geonetwork_ui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_11__.Z)((function*(response){if(!response.ok)throw new Error(`WMTS GetCapabilities HTTP request failed with code ${response.status} and body:\n${yield response.text()}`);return response.text()}));return function(_x){return _ref.apply(this,arguments)}}()).then((function(text){try{const result=(new ol_format_WMTSCapabilities__WEBPACK_IMPORTED_MODULE_12__.Z).read(text);return(0,ol_source_WMTS__WEBPACK_IMPORTED_MODULE_13__.B)(result,{layer:link.name,matrixSet:"EPSG:3857"})}catch(e){throw new Error(`WMTS GetCapabilities parsing failed:\n${e.stack||e.message||e}`)}})))}prioritizePageScroll(interactions){interactions.clear(),interactions.extend((0,ol_interaction__WEBPACK_IMPORTED_MODULE_14__.ce)({altShiftDragRotate:!1,pinchRotate:!1,dragPan:!1,mouseWheelZoom:!1}).extend([new ol_interaction__WEBPACK_IMPORTED_MODULE_15__.Z({condition:dragPanCondition}),new ol_interaction__WEBPACK_IMPORTED_MODULE_16__.Z({condition:mouseWheelZoomCondition})]).getArray())}}).ctorParameters=()=>[{type:_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.eN},{type:_map_utils_wms_service__WEBPACK_IMPORTED_MODULE_1__.k}],_class);function dragPanCondition(event){const dragPanCondition=2===this.getPointerCount()||(0,ol_events_condition__WEBPACK_IMPORTED_MODULE_20__.QL)(event);return dragPanCondition||this.getMap().dispatchEvent("mapmuted"),dragPanCondition}function mouseWheelZoomCondition(event){return(0,ol_events_condition__WEBPACK_IMPORTED_MODULE_20__.QC)(event)||"wheel"!==event.type||this.getMap().dispatchEvent("mapmuted"),(0,ol_events_condition__WEBPACK_IMPORTED_MODULE_20__.QC)(event)}MapUtilsService=(0,tslib__WEBPACK_IMPORTED_MODULE_18__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Injectable)({providedIn:"root"}),(0,tslib__WEBPACK_IMPORTED_MODULE_18__.w6)("design:paramtypes",[_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.eN,_map_utils_wms_service__WEBPACK_IMPORTED_MODULE_1__.k])],MapUtilsService)},"./libs/ui/map/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>UiMapModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");var _class,map_componentngResource=__webpack_require__("./libs/ui/map/src/lib/components/map/map.component.css?ngResource"),map_componentngResource_default=__webpack_require__.n(map_componentngResource),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),switchMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),delay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js");let MapComponent=((_class=class MapComponent{constructor(_element){this._element=_element,this.resizeObserver=new ResizeObserver((()=>{this.map.updateSize(),this.resizeObserver.unobserve(this.container.nativeElement)}))}ngOnInit(){this.displayMessage$=(0,merge.T)((0,fromEvent.R)(this.map,"mapmuted").pipe((0,map.U)((()=>!0))),(0,fromEvent.R)(this.map,"movestart").pipe((0,map.U)((()=>!1))),(0,fromEvent.R)(this.map,"singleclick").pipe((0,map.U)((()=>!1)))).pipe((0,switchMap.w)((muted=>muted?(0,timer.H)(2e3).pipe((0,map.U)((()=>!1)),(0,startWith.O)(!0),(0,delay.g)(400)):(0,of.of)(!1))))}ngAfterViewInit(){this.map.setTarget(this.container.nativeElement),this.resizeObserver.observe(this.container.nativeElement)}}).ctorParameters=()=>[{type:core.ElementRef}],_class.propDecorators={map:[{type:core.Input}],container:[{type:core.ViewChild,args:["map"]}]},_class);MapComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-map",template:'<div class="h-full w-full" #map></div>\n<div\n  class="absolute inset-0 p-2 rounded z-40 transition-all flex flex-col justify-center items-center text-primary font-sans pointer-events-none"\n  [ngClass]="\n    (displayMessage$ | async) ? \'visible opacity-100\' : \'invisible opacity-0\'\n  "\n>\n  <div\n    class="absolute z-[-1] inset-0 bg-gradient-to-b from-white to-primary-lightest opacity-60"\n  ></div>\n  <mat-icon class="!w-16 !h-16 text-[64px] mb-4">swipe</mat-icon>\n  <p translate>map.navigation.message</p>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[map_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[core.ElementRef])],MapComponent);var feature_detail_component_class,feature_detail_componentngResource=__webpack_require__("./libs/ui/map/src/lib/components/feature-detail/feature-detail.component.css?ngResource"),feature_detail_componentngResource_default=__webpack_require__.n(feature_detail_componentngResource);const geometryKeys=["geometry","the_geom"];let FeatureDetailComponent=((feature_detail_component_class=class FeatureDetailComponent{get properties(){return Object.keys(this.feature.getProperties()).filter((prop=>!geometryKeys.includes(prop)))}}).propDecorators={feature:[{type:core.Input}]},feature_detail_component_class);FeatureDetailComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-feature-detail",template:'<div *ngIf="feature" class="root">\n  <div class="property" *ngFor="let propName of properties">\n    <div>{{ propName }}</div>\n    <div class="font-bold">{{ feature.get(propName) }}</div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[feature_detail_componentngResource_default()]})],FeatureDetailComponent);var ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs");let UiMapModule=class UiMapModule{};UiMapModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[MapComponent,FeatureDetailComponent],imports:[common.CommonModule,http.JF,icon.Ps,ngx_translate_core.aw.forRoot()],exports:[MapComponent,FeatureDetailComponent]})],UiMapModule)},"./libs/feature/map/src/lib/map-context/component/map-context.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/map/src/lib/components/feature-detail/feature-detail.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".property {\n  border-bottom: 1px solid #f2f2f2;\n  padding-bottom: 0.625rem;\n  margin-bottom: 0.625rem;\n  font-size: 0.75rem;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/map/src/lib/components/map/map.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);