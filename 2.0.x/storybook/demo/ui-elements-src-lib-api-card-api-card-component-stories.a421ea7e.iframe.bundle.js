(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[4501],{"./libs/ui/elements/src/lib/api-card/api-card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>ApiCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,api_card_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/api-card/api-card.component.css?ngResource"),api_card_componentngResource_default=__webpack_require__.n(api_card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ApiCardComponent=((_class=class ApiCardComponent{}).propDecorators={link:[{type:core.Input}]},_class);ApiCardComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-api-card",template:'<div\n  class="group flex flex-col justify-between h-40 pt-5 pb-6 px-7 rounded bg-neutral-100 filter overflow-hidden hover:bg-white hover:shadow-xl transition-shadow"\n>\n  <div\n    class="font-title font-medium text-21 text-black text-ellipsis overflow-hidden break-words pb-5"\n    style="height: 4.5rem"\n  >\n    {{ link.name || link.description }}\n  </div>\n  <div class="">\n    <div class="flex flex-row justify-between">\n      <span\n        class="bg-primary-opacity-25 inline-flex items-center justify-center px-2 py-1 text-13 font-medium leading-none text-white rounded capitalize text-primary-lightest group-hover:bg-primary transition-colors"\n        >{{ link.accessServiceProtocol.toUpperCase() }}</span\n      >\n      <gn-ui-copy-text-button\n        [text]="link.url.toString()"\n        [tooltipText]="\'tooltip.url.copy\' | translate"\n        [displayText]="false"\n      ></gn-ui-copy-text-button>\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[api_card_componentngResource_default()]})],ApiCardComponent)},"./libs/ui/inputs/src/lib/copy-text-button/copy-text-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>CopyTextButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,copy_text_button_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/copy-text-button/copy-text-button.component.css?ngResource"),copy_text_button_componentngResource_default=__webpack_require__.n(copy_text_button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CopyTextButtonComponent=((_class=class CopyTextButtonComponent{constructor(){this.displayText=!0,this.rows=1}copyText(event){navigator.clipboard.writeText(this.text),event.target.blur()}}).propDecorators={text:[{type:core.Input}],tooltipText:[{type:core.Input}],displayText:[{type:core.Input}],rows:[{type:core.Input}]},_class);CopyTextButtonComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-copy-text-button",template:'<div class="flex">\n  <input\n    *ngIf="displayText && rows <= 1"\n    type="text"\n    class="grow py-2 px-4 bg-gray-200 opacity-50 rounded-l-md border border-gray-300 truncate"\n    value="{{ text }}"\n    readonly\n  />\n  <textarea\n    *ngIf="displayText && rows > 1"\n    [rows]="rows"\n    class="grow py-2 px-4 bg-gray-200 opacity-50 rounded-l-md border border-gray-300 overflow-y-auto h-max"\n    readonly\n    >{{ text }}</textarea\n  >\n  <button\n    type="button"\n    (click)="copyText($event)"\n    [ngClass]="{\n      \'py-2 px-4 rounded-r-md bg-gray-400 hover:bg-gray-600 focus:bg-gray-800 text-white\':\n        displayText\n    }"\n    mat-raised-button\n    [matTooltip]="tooltipText"\n    matTooltipPosition="above"\n  >\n    <mat-icon\n      class="material-symbols-outlined pointer-events-none align-middle card-icon"\n      >content_copy</mat-icon\n    >\n  </button>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[copy_text_button_componentngResource_default()]})],CopyTextButtonComponent)},"./libs/ui/elements/src/lib/api-card/api-card.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/util/i18n/src/index.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_api_card_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/elements/src/lib/api-card/api-card.component.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/material/fesm2022/tooltip.mjs"),_geonetwork_ui_ui_libs_copy_text_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/inputs/src/lib/copy-text-button/copy-text-button.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Elements/ApiCardComponent",component:_api_card_component__WEBPACK_IMPORTED_MODULE_2__.n,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({declarations:[_geonetwork_ui_ui_libs_copy_text_button__WEBPACK_IMPORTED_MODULE_3__.W],imports:[_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__.pw,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.aw.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_0__.fR),_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.Ps,_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.AV]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.applicationConfig)({providers:[]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.componentWrapperDecorator)((story=>`<div style="max-width: 800px">${story}</div>`))]},Primary={args:{link:{type:"service",accessServiceProtocol:"wfs",name:"Scot en cours d'élaboration ou de révision",description:"A file that contains all roads",url:new URL("https://roads.com/wfs")}}}},"./libs/ui/elements/src/lib/api-card/api-card.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/copy-text-button/copy-text-button.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);