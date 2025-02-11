(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[9168],{"./libs/ui/elements/src/lib/markdown-editor/markdown-editor.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>MarkdownEditorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var markdown_editor_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/markdown-editor/markdown-editor.component.css?ngResource"),markdown_editor_componentngResource_default=__webpack_require__.n(markdown_editor_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),markdown_parser_component=__webpack_require__("./libs/ui/elements/src/lib/markdown-parser/markdown-parser.component.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),src=__webpack_require__("./libs/ui/inputs/src/index.ts"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),tooltip=__webpack_require__("./node_modules/@angular/material/fesm2022/tooltip.mjs");let MarkdownEditorComponent=class MarkdownEditorComponent{constructor(){this.preview=!1,this.textContentChanged=new core.EventEmitter}textContentChangedHandler(textContent){this.textContent=textContent,this.textContentChanged.emit(this.textContent)}static#_=this.propDecorators={preview:[{type:core.Input}],helperText:[{type:core.Input}],placeholder:[{type:core.Input}],textContent:[{type:core.Input}],textContentChanged:[{type:core.Output}]}};MarkdownEditorComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-markdown-editor",template:'<div class="h-full flex flex-col">\n  <p class="flex-none mb-2 font-medium text-sm text-gray-900">\n    {{ helperText }}\n  </p>\n  <div class="flex-1" [hidden]="preview">\n    <gn-ui-text-area\n      [placeholder]="placeholder"\n      [value]="textContent"\n      (valueChange)="textContentChangedHandler($event)"\n    ></gn-ui-text-area>\n  </div>\n  <div\n    class="flex-1 border border-gray-800 rounded overflow-y-scroll"\n    [hidden]="!preview"\n  >\n    <gn-ui-markdown-parser [textContent]="textContent"></gn-ui-markdown-parser>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,fesm2022_forms.u5,icon.Ps,tooltip.AV,src.r0,src.U5,markdown_parser_component.H,ngx_translate_core.aw],styles:[markdown_editor_componentngResource_default()]})],MarkdownEditorComponent)},"./libs/ui/elements/src/lib/markdown-parser/markdown-parser.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>MarkdownParserComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var markdown_parser_componentngResource=__webpack_require__("./libs/ui/elements/src/lib/markdown-parser/markdown-parser.component.css?ngResource"),markdown_parser_componentngResource_default=__webpack_require__.n(markdown_parser_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),marked_esm=__webpack_require__("./node_modules/marked/lib/marked.esm.js");let MarkdownParserComponent=class MarkdownParserComponent{get parsedMarkdown(){return marked_esm.TU.parse(this.textContent)}static#_=this.propDecorators={textContent:[{type:core.Input}]}};MarkdownParserComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"gn-ui-markdown-parser",template:'<div class="markdown-body" [innerHTML]="parsedMarkdown"></div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,styles:[markdown_parser_componentngResource_default()]})],MarkdownParserComponent)},"./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>firstValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js");function firstValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var subscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Hp({next:function(value){resolve(value),subscriber.unsubscribe()},error:reject,complete:function(){hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.K)}});source.subscribe(subscriber)}))}},"./libs/ui/elements/src/lib/markdown-editor/markdown-editor.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Edition:()=>Edition,Preview:()=>Preview,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_markdown_editor_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/ui/elements/src/lib/markdown-editor/markdown-editor.component.ts");const textContent=' \n# SUPPORTED MARKDOWN CONTENT\n\n## 1) Headings\n\n+ # h1 Heading\n+ ## h2 Heading\n+ ### h3 Heading\n+ #### h4 Heading\n+ ##### h5 Heading\n+ ###### h6 Heading\n\n\n## 2) Horizontal Rules\n\n+ ___\n\n+ ---\n\n+ ***\n\n## 3) Emphasis\n\n+ **This is bold text**\n\n+ __This is bold text__\n\n+ *This is italic text*\n\n+ _This is italic text_\n\n+ ~~Strikethrough~~\n\n\n## 3) Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## 4) Lists\n\n**Unordered**\n\n+ Create a list by starting a line with +, -, or *\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ List continue here\n\n**Ordered**\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as 1.\n\n**Start numbering with offset:**\n\n57. foo\n1. bar\n\n\n## 5) Code\n\n**Inline code**\n\n(no example)\n\n**Indented code**\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\n**Block code "fences"**\n\n(no example)\n\n\n## 6) Tables\n\n**Left aligned columns**\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n**Right aligned columns**\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## 7) Links\n\n[link text](https://github.com/geonetwork/geonetwork-ui)\n\n[link with title](https://github.com/geonetwork/geonetwork-ui "title text!")\n\n\n## 8) Images\n\n**With and without title**\n\n![Geonetwork](https://geonetwork-opensource.org/_static/chrome/geonetwork3-logo.png "Geonetwork title")',__WEBPACK_DEFAULT_EXPORT__={title:"Elements/MarkdownEditorComponent",component:_markdown_editor_component__WEBPACK_IMPORTED_MODULE_1__.k,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_markdown_editor_component__WEBPACK_IMPORTED_MODULE_1__.k]})]},Edition={args:{preview:!1,helperText:"Some helper text",placeholder:"Some placeholder",textContent},argTypes:{textContent:{control:"text"}},render:args=>({props:args,template:'\n    <div style="width: 600px;height: 400px;">\n      <gn-ui-markdown-editor\n        [preview]="preview"\n        [helperText]="helperText"\n        [placeholder]="placeholder"\n        [textContent]="textContent"\n      ></gn-ui-markdown-editor>\n    </div>'})},Preview={args:{preview:!0,helperText:"Some helper text",placeholder:"Some placeholder",textContent},argTypes:{textContent:{control:"text"}},render:args=>({props:args,template:'\n    <div style="width: 600px;height: 400px;">\n      <gn-ui-markdown-editor\n        [preview]="preview"\n        [helperText]="helperText"\n        [placeholder]="placeholder"\n        [textContent]="textContent"\n      ></gn-ui-markdown-editor>\n    </div>'})}},"./libs/ui/elements/src/lib/markdown-editor/markdown-editor.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/ui/elements/src/lib/markdown-parser/markdown-parser.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/** Body **/\n:host ::ng-deep .markdown-body {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  margin: 0px 0px 1.5rem 0px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n/** Emphasis **/\n\n:host ::ng-deep .markdown-body strong {\n  font-weight: 700;\n  color: var(--color-secondary-darker);\n}\n\n/** Headings **/\n\n:host ::ng-deep .markdown-body h1,\n:host ::ng-deep .markdown-body h2,\n:host ::ng-deep .markdown-body h3,\n:host ::ng-deep .markdown-body h4,\n:host ::ng-deep .markdown-body h5,\n:host ::ng-deep .markdown-body h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  line-height: 1.25;\n  font-family: var(--font-family-title, ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif);\n  font-weight: 700;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n:host ::ng-deep .markdown-body h1 {\n  margin: 0.67em 0;\n  padding-bottom: 0.3em;\n  font-size: 2em;\n  color: var(--color-primary);\n}\n\n:host ::ng-deep .markdown-body h2 {\n  padding-bottom: 0.3em;\n  font-size: 1.5em;\n  color: var(--color-secondary);\n}\n\n:host ::ng-deep .markdown-body h3 {\n  font-size: 1.25em;\n  color: var(--color-secondary);\n}\n\n:host ::ng-deep .markdown-body h4 {\n  font-size: 1em;\n  color: var(--color-secondary);\n}\n\n:host ::ng-deep .markdown-body h5 {\n  font-size: 0.875em;\n  color: var(--color-secondary);\n}\n\n:host ::ng-deep .markdown-body h6 {\n  font-size: 0.85em;\n  color: var(--color-secondary-lighter);\n}\n\n/** Paragraphs **/\n\n:host ::ng-deep .markdown-body p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n/** Links **/\n\n:host ::ng-deep .markdown-body p > a {\n  margin-top: 0;\n  margin-bottom: 10px;\n  color: var(--color-primary) !important;\n  text-decoration: none;\n}\n\n:host ::ng-deep .markdown-body p > a:hover {\n  color: var(--color-primary-darker) !important;\n  text-decoration-line: underline;\n}\n\n/** Blockquotes **/\n\n:host ::ng-deep .markdown-body blockquote {\n  margin: 0;\n  padding: 0 1em;\n  color: var(--color-secondary-lighter);\n  border-left: 0.25em solid var(--color-primary-lighter);\n}\n\n/** Code **/\n\n:host ::ng-deep .markdown-body pre {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 12px;\n  background-color: var(--color-gray-100);\n  word-wrap: normal;\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  color: var(--color-secondary);\n  border-radius: 6px;\n}\n\n:host ::ng-deep .markdown-body code {\n  padding: 0.2em 0.4em;\n  margin: 0;\n  font-size: 85%;\n  white-space: break-spaces;\n  border-radius: 6px;\n}\n\n:host ::ng-deep .markdown-body pre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  border: 0;\n}\n\n/** Horizontal rules **/\n\n:host ::ng-deep .markdown-body hr {\n  box-sizing: content-box;\n  overflow: hidden;\n  background: transparent;\n  border-bottom: 1px solid var(--color-secondary);\n  height: 0.15em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: var(--color-secondary);\n  border: 0;\n}\n\n:host ::ng-deep .markdown-body hr::before {\n  display: table;\n  content: '';\n}\n\n:host ::ng-deep .markdown-body hr::after {\n  display: table;\n  clear: both;\n  content: '';\n}\n\n/** Lists **/\n\n:host ::ng-deep .markdown-body ul,\n:host ::ng-deep .markdown-body ol {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 2em;\n  list-style: revert;\n}\n\n:host ::ng-deep .markdown-body ol ol,\n:host ::ng-deep .markdown-body ul ol {\n  list-style-type: lower-roman;\n}\n\n:host ::ng-deep .markdown-body ul ul ol,\n:host ::ng-deep .markdown-body ul ol ol,\n:host ::ng-deep .markdown-body ol ul ol,\n:host ::ng-deep .markdown-body ol ol ol {\n  list-style-type: lower-alpha;\n}\n\n:host ::ng-deep .markdown-body ol[type='a s'] {\n  list-style-type: lower-alpha;\n}\n\n:host ::ng-deep .markdown-body ol[type='A s'] {\n  list-style-type: upper-alpha;\n}\n\n:host ::ng-deep .markdown-body ol[type='i s'] {\n  list-style-type: lower-roman;\n}\n\n:host ::ng-deep .markdown-body ol[type='I s'] {\n  list-style-type: upper-roman;\n}\n\n:host ::ng-deep .markdown-body ol[type='1'] {\n  list-style: unset;\n  list-style-type: decimal;\n}\n\n:host ::ng-deep .markdown-body div > ol:not([type]) {\n  list-style: unset;\n  list-style-type: decimal;\n}\n\n/** Table **/\n\n:host ::ng-deep .markdown-body table {\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: block;\n  width: max-content;\n  max-width: 100%;\n  overflow: auto;\n  padding-bottom: 15px;\n}\n\n:host ::ng-deep .markdown-body td,\n:host ::ng-deep .markdown-body th {\n  padding: 0;\n}\n\n:host ::ng-deep .markdown-body th {\n  color: var(--color-secondary);\n}\n\n:host ::ng-deep .markdown-body table th,\n:host ::ng-deep .markdown-body table td {\n  padding: 6px 13px;\n  border: 1px solid var(--color-gray-500);\n}\n\n:host ::ng-deep .markdown-body table td > :last-child {\n  margin-bottom: 0;\n}\n\n:host ::ng-deep .markdown-body table tr {\n  background-color: #ffffff;\n  border-top: 1px solid var(--color-secondary-lighter);\n}\n\n:host ::ng-deep .markdown-body table tr:nth-child(2n) {\n  background-color: var(--color-gray-100);\n}\n\n:host ::ng-deep .markdown-body table img {\n  background-color: transparent;\n}\n\n/** Images **/\n\n:host ::ng-deep .markdown-body img {\n  border-style: none;\n  max-width: 100%;\n  box-sizing: content-box;\n  background-color: transparent;\n}\n\n:host ::ng-deep .markdown-body img[align='right'] {\n  padding-left: 20px;\n}\n\n:host ::ng-deep .markdown-body img[align='left'] {\n  padding-right: 20px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);