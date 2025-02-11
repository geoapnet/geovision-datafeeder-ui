(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[791],{"./libs/feature/editor/src/lib/components/constraint-card/constraint-card.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithUrl:()=>WithUrl,WithoutUrl:()=>WithoutUrl,default:()=>constraint_card_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var constraint_card_componentngResource=__webpack_require__("./libs/feature/editor/src/lib/components/constraint-card/constraint-card.component.css?ngResource"),constraint_card_componentngResource_default=__webpack_require__.n(constraint_card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/ui/elements/src/index.ts");var form_field_rich_componentngResource=__webpack_require__("./libs/feature/editor/src/lib/components/record-form/form-field/form-field-rich/form-field-rich.component.css?ngResource"),form_field_rich_componentngResource_default=__webpack_require__.n(form_field_rich_componentngResource),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),inputs_src=__webpack_require__("./libs/ui/inputs/src/index.ts"),layout_src=__webpack_require__("./libs/ui/layout/src/index.ts");let FormFieldRichComponent=class FormFieldRichComponent{constructor(){this.placeholder="Votre texte ici",this.valueChange=new core.EventEmitter,this.preview=!1}togglePreview(){this.preview=!this.preview}static#_=this.propDecorators={label:[{type:core.Input}],hint:[{type:core.Input}],placeholder:[{type:core.Input}],value:[{type:core.Input}],valueChange:[{type:core.Output}]}};FormFieldRichComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-form-field-rich",template:'<gn-ui-form-field-wrapper [label]="label" [hint]="hint">\n  <gn-ui-button\n    form-field-interaction\n    [type]="preview ? \'black\' : \'gray\'"\n    style="\n      --gn-ui-button-padding: 3px 8px;\n      --gn-ui-button-font-size: 12px;\n      --gn-ui-button-rounded: 20px;\n    "\n    (buttonClick)="togglePreview()"\n  >\n    <span\n      class="material-symbols-outlined gn-ui-icon-small"\n      [ngClass]="{ \'text-primary\': !preview }"\n      >{{ preview ? \'visibility\' : \'visibility_off\' }}</span\n    >\n    &nbsp;\n    {{ preview ? \'WYSIWYG\' : \'Markdown\' }}\n  </gn-ui-button>\n  <gn-ui-markdown-editor\n    [preview]="preview"\n    [placeholder]="placeholder"\n    [textContent]="value"\n    (textContentChanged)="valueChange.emit($event)"\n    textAreaExtraClass="min-h-[100px]"\n  ></gn-ui-markdown-editor>\n</gn-ui-form-field-wrapper>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,fesm2022_forms.X1,src.If,layout_src.zo,inputs_src.Qp],styles:[form_field_rich_componentngResource_default()]})],FormFieldRichComponent);var icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),ng_icons_iconoir=__webpack_require__("./node_modules/@ng-icons/iconoir/fesm2022/ng-icons-iconoir.mjs"),biesbjerg_ngx_translate_extract_marker=__webpack_require__("./node_modules/@biesbjerg/ngx-translate-extract-marker/fesm5/biesbjerg-ngx-translate-extract-marker.js");let ConstraintCardComponent=class ConstraintCardComponent{constructor(){this.constraintChange=new core.EventEmitter,this.hint=(0,biesbjerg_ngx_translate_extract_marker.x)("editor.record.form.constraint.markdown.placeholder"),this.showUrl=!1}set constraint(v){this.constraint_=v,this.showUrl=this.showUrl||!!v.url}handleConstraintTextChange(text){this.constraintChange.emit({...this.constraint_,text})}handleURLChange(url){this.constraintChange.emit({text:this.constraint_.text,...url&&{url:new URL(url)}})}static#_=this.propDecorators={label:[{type:core.Input}],constraint:[{type:core.Input}],constraintChange:[{type:core.Output}]}};ConstraintCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-constraint-card",standalone:!0,imports:[common.CommonModule,src.If,FormFieldRichComponent,inputs_src.$1,inputs_src.Qp,icon.m_,ngx_translate_core.h,ng_icons_core.Uq],providers:[(0,ng_icons_core.EB)({iconoirPlus:ng_icons_iconoir.EIo}),(0,ng_icons_core.PG)({size:"1.5rem"})],template:'<div class="flex flex-col gap-1 border rounded-lg p-4">\n  <gn-ui-form-field-rich\n    class="mt-[-8px]"\n    [label]="label"\n    [hint]="hint | translate"\n    [value]="constraint_.text ?? \'\'"\n    (valueChange)="handleConstraintTextChange($event)"\n  ></gn-ui-form-field-rich>\n\n  <div *ngIf="!showUrl" class="flex-none mt-1">\n    <gn-ui-button\n      (buttonClick)="showUrl = true"\n      type="gray"\n      data-cy="add-url-btn"\n    >\n      <ng-icon name="iconoirPlus" class="text-primary"></ng-icon>&nbsp;\n      <span translate>input.image.displayUrlInput</span>\n    </gn-ui-button>\n  </div>\n  <gn-ui-url-input\n    *ngIf="showUrl"\n    class="mt-3.5"\n    [value]="constraint_.url?.toString()"\n    (valueChange)="handleURLChange($event)"\n    [showUploadButton]="false"\n  >\n  </gn-ui-url-input>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[constraint_card_componentngResource_default()]})],ConstraintCardComponent);var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),i18n_src=__webpack_require__("./libs/util/i18n/src/index.ts");const constraint_card_component_stories={title:"Elements/ConstraintCardComponent",component:ConstraintCardComponent,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,ConstraintCardComponent]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule),(0,core.importProvidersFrom)(i18n_src.D7),(0,core.importProvidersFrom)(ngx_translate_core.h.forRoot())]})],argTypes:{constraintChange:{action:"constraintChange"}}},WithUrl={args:{label:"My constraint",constraint:{text:"This is a multiline and **formatted** constraint text.\n\n## introduction\n\nIt covers:\n- things\n- other things\n\n_and it's great_.",url:new URL("https://example.com/my-license.pdf")}}},WithoutUrl={args:{label:"My constraint",constraint:{text:"This is a multiline and **formatted** constraint text."}}}},"./libs/feature/editor/src/lib/components/constraint-card/constraint-card.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --gn-ui-button-padding: 8px 8px;\n  --gn-ui-button-rounded: 8px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/feature/editor/src/lib/components/record-form/form-field/form-field-rich/form-field-rich.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);