(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[8247],{"./libs/ui/inputs/src/lib/form-field/form-field-file/form-field-file.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>FormFieldFileComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_field_file_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-file/form-field-file.component.css?ngResource"),form_field_file_componentngResource_default=__webpack_require__.n(form_field_file_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormFieldFileComponent=((_class=class FormFieldFileComponent{constructor(){this.readonly=!1,this.invalid=!1,this.placeholder=""}}).propDecorators={control:[{type:core.Input}],readonly:[{type:core.Input}],invalid:[{type:core.Input}],placeholder:[{type:core.Input}]},_class);FormFieldFileComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-form-field-file",template:'<input\n  type="file"\n  [readonly]="readonly"\n  [formControl]="control"\n  [placeholder]="placeholder"\n  class="border rounded-md p-3 w-full bg-white transition-colors"\n  [ngClass]="{\n    \'border-pink-500\': invalid,\n    \'border-gray-200\': !invalid,\n    \'text-gray-600\': readonly\n  }"\n/>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_field_file_componentngResource_default()]})],FormFieldFileComponent)},"./libs/ui/inputs/src/lib/form-field/form-field-rich/form-field-rich.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>FormFieldRichComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_field_rich_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-rich/form-field-rich.component.css?ngResource"),form_field_rich_componentngResource_default=__webpack_require__.n(form_field_rich_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormFieldRichComponent=((_class=class FormFieldRichComponent{constructor(){this.readonly=!1,this.invalid=!1,this.placeholder=""}}).propDecorators={control:[{type:core.Input}],readonly:[{type:core.Input}],invalid:[{type:core.Input}],placeholder:[{type:core.Input}]},_class);FormFieldRichComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-form-field-rich",template:'<textarea\n  [readonly]="readonly"\n  [formControl]="control"\n  [placeholder]="placeholder"\n  class="border rounded-md p-3 w-full bg-white h-full resize-none transition-colors"\n  [ngClass]="{\n    \'border-pink-500\': invalid,\n    \'border-gray-200\': !invalid,\n    \'text-gray-600\': readonly\n  }"\n></textarea>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_field_rich_componentngResource_default()]})],FormFieldRichComponent)},"./libs/ui/inputs/src/lib/form-field/form-field-simple/form-field-simple.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>FormFieldSimpleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_field_simple_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-simple/form-field-simple.component.css?ngResource"),form_field_simple_componentngResource_default=__webpack_require__.n(form_field_simple_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormFieldSimpleComponent=((_class=class FormFieldSimpleComponent{constructor(){this.readonly=!1,this.invalid=!1,this.placeholder=""}get inputType(){switch(this.type){case"url":case"text":return"text";case"date":return"datetime-local";case"number":return"number";case"toggle":return"checkbox";default:return""}}get isSelect(){return"list"===this.type}}).propDecorators={type:[{type:core.Input}],control:[{type:core.Input}],readonly:[{type:core.Input}],invalid:[{type:core.Input}],placeholder:[{type:core.Input}],options:[{type:core.Input}]},_class);FormFieldSimpleComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-form-field-simple",template:'<input\n  *ngIf="!isSelect"\n  [type]="inputType"\n  [readonly]="readonly"\n  [formControl]="control"\n  [placeholder]="placeholder"\n  class="border rounded-md p-3 w-full bg-white transition-colors"\n  [ngClass]="{\n    \'border-pink-500\': invalid,\n    \'border-gray-200\': !invalid,\n    \'text-gray-600\': readonly\n  }"\n/>\n<select\n  *ngIf="isSelect"\n  [formControl]="control"\n  class="border rounded-md p-3 w-full bg-white transition-colors"\n  [ngClass]="{\n    \'border-pink-500\': invalid,\n    \'border-gray-200\': !invalid,\n    \'text-gray-600\': readonly\n  }"\n>\n  <option *ngFor="let option of options" [ngValue]="option.value">\n    {{ option.label }}\n  </option>\n</select>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_field_simple_componentngResource_default()]})],FormFieldSimpleComponent)},"./libs/ui/inputs/src/lib/form-field/form-field-spatial-extent/form-field-spatial-extent.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>FormFieldSpatialExtentComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var form_field_spatial_extent_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-spatial-extent/form-field-spatial-extent.component.css?ngResource"),form_field_spatial_extent_componentngResource_default=__webpack_require__.n(form_field_spatial_extent_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormFieldSpatialExtentComponent=class FormFieldSpatialExtentComponent{};FormFieldSpatialExtentComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-form-field-spatial-extent",template:"<p>form-field-spatial-extent works!</p>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_field_spatial_extent_componentngResource_default()]})],FormFieldSpatialExtentComponent)},"./libs/ui/inputs/src/lib/form-field/form-field-temporal-extent/form-field-temporal-extent.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>FormFieldTemporalExtentComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var form_field_temporal_extent_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-temporal-extent/form-field-temporal-extent.component.css?ngResource"),form_field_temporal_extent_componentngResource_default=__webpack_require__.n(form_field_temporal_extent_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormFieldTemporalExtentComponent=class FormFieldTemporalExtentComponent{};FormFieldTemporalExtentComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-form-field-temporal-extent",template:"<p>form-field-temporal-extent works!</p>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_field_temporal_extent_componentngResource_default()]})],FormFieldTemporalExtentComponent)},"./libs/ui/inputs/src/lib/form-field/form-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>FormFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _class,form_field_componentngResource=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field.component.css?ngResource"),form_field_componentngResource_default=__webpack_require__.n(form_field_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let FormFieldComponent=((_class=class FormFieldComponent{set value(v){this.formControl.setValue(v)}constructor(){this.formControl=new fesm2022_forms.NI,this.valueChange=this.formControl.valueChanges}get simpleType(){return this.config.type}get isSimpleField(){return"text"===this.config.type||"number"===this.config.type||"date"===this.config.type||"list"===this.config.type||"url"===this.config.type||"toggle"===this.config.type}get isRichField(){return"rich"===this.config.type}get isFileField(){return"file"===this.config.type}get isSpatialExtentField(){return"spatial_extent"===this.config.type}get isTemporalExtentField(){return"temporal_extent"===this.config.type}get isArrayField(){return"array"===this.config.type}get isObjectField(){return"object"===this.config.type}get isFieldOk(){return!this.config.locked&&!this.config.invalid}get isFieldLocked(){return this.config.locked}get isFieldInvalid(){return!this.config.locked&&this.config.invalid}}).ctorParameters=()=>[],_class.propDecorators={config:[{type:core.Input}],value:[{type:core.Input}],valueChange:[{type:core.Output}]},_class);FormFieldComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-form-field",template:'<div class="flex flex-col h-full">\n  <div class="mb-2 flex flex-row">\n    <label class="grow">\n      <span class="font-medium field-label">{{\n        config.labelKey | translate\n      }}</span>\n      <span *ngIf="config.hintKey" class="text-gray-900 text-sm">\n        - {{ config.hintKey | translate }}\n      </span>\n    </label>\n    <mat-icon *ngIf="isFieldOk" class="text-[#c6d950] icon-ok"\n      >check_circle</mat-icon\n    >\n    <mat-icon\n      *ngIf="isFieldLocked"\n      class="material-icons-outlined text-blue-400 icon-locked"\n      >lock</mat-icon\n    >\n    <mat-icon *ngIf="isFieldInvalid" class="text-pink-500 icon-invalid"\n      >cancel</mat-icon\n    >\n  </div>\n  <ng-container *ngIf="isSimpleField">\n    <gn-ui-form-field-simple\n      [type]="simpleType"\n      [control]="formControl"\n      [readonly]="isFieldLocked"\n      [invalid]="isFieldInvalid"\n    ></gn-ui-form-field-simple>\n  </ng-container>\n  <ng-container *ngIf="isFileField">\n    <gn-ui-form-field-file\n      [control]="formControl"\n      [readonly]="isFieldLocked"\n      [invalid]="isFieldInvalid"\n    ></gn-ui-form-field-file>\n  </ng-container>\n  <ng-container *ngIf="isRichField">\n    <gn-ui-form-field-rich\n      class="grow"\n      [control]="formControl"\n      [readonly]="isFieldLocked"\n      [invalid]="isFieldInvalid"\n    ></gn-ui-form-field-rich>\n  </ng-container>\n  <ng-container *ngIf="isArrayField">\n    <gn-ui-form-field-array></gn-ui-form-field-array>\n  </ng-container>\n  <ng-container *ngIf="isObjectField">\n    <gn-ui-form-field-object></gn-ui-form-field-object>\n  </ng-container>\n  <ng-container *ngIf="isSpatialExtentField">\n    <gn-ui-form-field-spatial-extent></gn-ui-form-field-spatial-extent>\n  </ng-container>\n  <ng-container *ngIf="isTemporalExtentField">\n    <gn-ui-form-field-temporal-extent></gn-ui-form-field-temporal-extent>\n  </ng-container>\n  <div\n    *ngIf="isFieldInvalid && config.invalidHintKey"\n    class="mt-2 text-pink-500 text-sm field-invalid-hint"\n  >\n    {{ config.invalidHintKey | translate }}\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[form_field_componentngResource_default()]}),(0,tslib_es6.w6)("design:paramtypes",[])],FormFieldComponent)},"./libs/ui/inputs/src/lib/form-field/form-field.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_form_field_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field.component.ts"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_form_field_simple_form_field_simple_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-simple/form-field-simple.component.ts"),_angular_forms__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_form_field_spatial_extent_form_field_spatial_extent_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-spatial-extent/form-field-spatial-extent.component.ts"),_form_field_file_form_field_file_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-file/form-field-file.component.ts"),_form_field_temporal_extent_form_field_temporal_extent_component__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-temporal-extent/form-field-temporal-extent.component.ts"),_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./libs/util/i18n/src/index.ts"),_form_field_rich_form_field_rich_component__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./libs/ui/inputs/src/lib/form-field/form-field-rich/form-field-rich.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Inputs/FormFieldComponent",component:_form_field_component__WEBPACK_IMPORTED_MODULE_1__.h,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.Hw,_form_field_simple_form_field_simple_component__WEBPACK_IMPORTED_MODULE_2__.Q,_form_field_spatial_extent_form_field_spatial_extent_component__WEBPACK_IMPORTED_MODULE_3__.A,_form_field_file_form_field_file_component__WEBPACK_IMPORTED_MODULE_4__.u,_form_field_temporal_extent_form_field_temporal_extent_component__WEBPACK_IMPORTED_MODULE_5__.H,_form_field_rich_form_field_rich_component__WEBPACK_IMPORTED_MODULE_7__.Y],imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.u5,_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UX,_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_6__.pw,_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.aw.forRoot(_geonetwork_ui_util_i18n__WEBPACK_IMPORTED_MODULE_6__.fR)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`\n      <div class="border border-gray-300 p-2 w-[600px] h-[400px] resize overflow-auto">\n        ${story}\n      </div>`))]},Basic=args=>({props:{config:args}});Basic.args={model:"myModel",type:"text",labelKey:"my.field.label",hintKey:"my.field.hint",tooltipKey:"my.field.tooltip",required:!1,locked:!1,invalid:!1,invalidHintKey:""},Basic.argTypes={type:{control:"radio",options:["text","number","date","list","url","toggle","rich","file","spatial_extent","temporal_extent"]}}},"./libs/ui/inputs/src/lib/form-field/form-field-file/form-field-file.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/form-field/form-field-rich/form-field-rich.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/form-field/form-field-simple/form-field-simple.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/form-field/form-field-spatial-extent/form-field-spatial-extent.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/form-field/form-field-temporal-extent/form-field-temporal-extent.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/inputs/src/lib/form-field/form-field.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);