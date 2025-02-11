(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[6571],{"./libs/common/domain/src/lib/repository/records-repository.interface.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>RecordsRepositoryInterface});class RecordsRepositoryInterface{}},"./libs/feature/notifications/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I2:()=>NotificationsService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),BehaviorSubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js");let NotificationsService=class NotificationsService{constructor(){this.notifications$=new BehaviorSubject.t([])}showNotification(content,timeoutMs){const id=Math.floor(1e6*Math.random());this.notifications$.next([...this.notifications$.value,{...content,id}]),void 0!==timeoutMs&&setTimeout((()=>{this.removeNotificationById(id)}),timeoutMs)}removeNotificationById(id){this.notifications$.next(this.notifications$.value.filter((n=>n.id!==id)))}};NotificationsService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],NotificationsService);let FeatureNotificationsModule=class FeatureNotificationsModule{};FeatureNotificationsModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[],exports:[],imports:[],providers:[NotificationsService]})],FeatureNotificationsModule);var notifications_container_componentngResource=__webpack_require__("./libs/feature/notifications/src/lib/notifications-container/notifications-container.component.css?ngResource"),notifications_container_componentngResource_default=__webpack_require__.n(notifications_container_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/ui/elements/src/index.ts"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");let NotificationsContainerComponent=class NotificationsContainerComponent{constructor(notificationsService){this.notificationsService=notificationsService}trackById(index,notification){return notification.id}static#_=this.ctorParameters=()=>[{type:NotificationsService}]};NotificationsContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-notifications-container",standalone:!0,imports:[common.CommonModule,src.zP],template:'<div class="flex flex-col gap-6 p-6 items-start pointer-events-none">\n  <gn-ui-notification\n    *ngFor="\n      let notification of notificationsService.notifications$ | async;\n      trackBy: trackById\n    "\n    class="max-w-full pointer-events-auto"\n    [text]="notification.text"\n    [type]="notification.type"\n    [title]="notification.title"\n    [closeMessage]="notification.closeMessage"\n    (notificationClose)="\n      notificationsService.removeNotificationById(notification.id)\n    "\n    [@enterExit]\n  ></gn-ui-notification>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,animations:[(0,animations.hZ)("enterExit",[(0,animations.kY)(":enter",[(0,animations.i0)("150ms",(0,animations.i7)([(0,animations.iF)({transform:"scale(1)",opacity:0}),(0,animations.iF)({transform:"scale(1.03)",opacity:.5}),(0,animations.iF)({transform:"scale(1)",opacity:1})]))]),(0,animations.kY)(":leave",[(0,animations.i0)("200ms",(0,animations.iF)({transform:"translateX(50px)",opacity:0}))])])],styles:[notifications_container_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[NotificationsService])],NotificationsContainerComponent)},"./libs/feature/editor/src/lib/components/import-record/import-record.component.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,default:()=>import_record_component_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var import_record_componentngResource=__webpack_require__("./libs/feature/editor/src/lib/components/import-record/import-record.component.css?ngResource"),import_record_componentngResource_default=__webpack_require__.n(import_record_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),src=__webpack_require__("./libs/ui/inputs/src/index.ts"),elements_src=__webpack_require__("./libs/ui/elements/src/index.ts"),ngx_translate_core=__webpack_require__("./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs"),notifications_src=__webpack_require__("./libs/feature/notifications/src/index.ts"),records_repository_interface=__webpack_require__("./libs/common/domain/src/lib/repository/records-repository.interface.ts"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),ng_icons_core=__webpack_require__("./node_modules/@ng-icons/core/fesm2022/ng-icons-core.mjs"),ng_icons_iconoir=__webpack_require__("./node_modules/@ng-icons/iconoir/fesm2022/ng-icons-iconoir.mjs");let ImportRecordComponent=class ImportRecordComponent{constructor(router,translateService,cdr,notificationsService,recordsRepository){this.router=router,this.translateService=translateService,this.cdr=cdr,this.notificationsService=notificationsService,this.recordsRepository=recordsRepository,this.closeImportMenu=new core.EventEmitter,this.importMenuItems=[{label:this.translateService.instant("dashboard.importRecord.importExternal"),icon:"iconoirImport",action:this.displayImportExternal.bind(this),dataTest:"importFromUrlButton"}],this.isRecordImportInProgress=!1,this.sectionDisplayed="mainMenu",this.externalImportBackLabel=this.translateService.instant("dashboard.importRecord.importExternalLabel")}displayMainMenu(){this.sectionDisplayed="mainMenu",this.cdr.markForCheck()}displayImportExternal(){this.sectionDisplayed="importExternalFile",this.cdr.markForCheck()}importRecord(url){this.isRecordImportInProgress=!0,this.recordsRepository.duplicateExternalRecord(url).subscribe({next:recordTempId=>{recordTempId&&(this.notificationsService.showNotification({type:"success",title:this.translateService.instant("editor.record.importFromExternalFile.success.title"),text:`${this.translateService.instant("editor.record.importFromExternalFile.success.body")}`},2500),this.router.navigate(["/edit",recordTempId]).catch((err=>console.error(err)))),this.closeImportMenu.next()},error:error=>{this.notificationsService.showNotification({type:"error",title:this.translateService.instant("editor.record.importFromExternalFile.failure.title"),text:`${this.translateService.instant("editor.record.importFromExternalFile.failure.body")} ${error.message??""}`},2500),this.isRecordImportInProgress=!1,this.cdr.markForCheck()}})}static#_=this.ctorParameters=()=>[{type:router.Ix},{type:ngx_translate_core.c$},{type:core.ChangeDetectorRef},{type:notifications_src.I2},{type:records_repository_interface.w}];static#_2=this.propDecorators={closeImportMenu:[{type:core.Output}]}};ImportRecordComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"gn-ui-import-record",template:'<ng-container [ngSwitch]="sectionDisplayed">\n  <ng-container *ngSwitchCase="\'mainMenu\'">\n    <div\n      data-test="importMenuMainSection"\n      class="mt-2 border border-gray-100 p-2 flex items-center bg-white shadow-2xl rounded-2xl"\n    >\n      <ul class="flex flex-col gap-2 w-full">\n        <li *ngFor="let menuItem of importMenuItems">\n          <gn-ui-button\n            [attr.data-test]="menuItem.dataTest"\n            type="light"\n            extraClass="flex flex-row items-center gap-2 w-full justify-start"\n            (buttonClick)="menuItem.action()"\n            [disabled]="menuItem.disabled"\n            [title]="\n              (menuItem.disabled ? \'editor.temporary.disabled\' : \'\') | translate\n            "\n            ><ng-icon [name]="menuItem.icon"></ng-icon\n            ><span>{{ menuItem.label }}</span></gn-ui-button\n          >\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n  <ng-container *ngSwitchCase="\'importExternalFile\'">\n    <div\n      data-test="importMenuImportExternalFileSection"\n      class="p-6 flex flex-col gap-2 mt-2 border border-gray-100 bg-white shadow-2xl rounded-2xl"\n    >\n      <div class="flex flex-row items-center gap-2">\n        <gn-ui-button\n          data-test="importMenuImportExternalFileSectionBackButton"\n          type="light"\n          (buttonClick)="displayMainMenu()"\n        >\n          <ng-icon name="iconoirArrowLeft"></ng-icon>\n        </gn-ui-button>\n        <span class="font-bold"> {{ externalImportBackLabel }}</span>\n      </div>\n      <gn-ui-url-input\n        (uploadClick)="importRecord($event)"\n        [disabled]="isRecordImportInProgress"\n      ></gn-ui-url-input>\n    </div>\n  </ng-container>\n</ng-container>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[common.CommonModule,src.Qp,elements_src.Yg,src.$1,ngx_translate_core.h,ng_icons_core.Uq],providers:[(0,ng_icons_core.EB)({iconoirImport:ng_icons_iconoir.fiC,iconoirLightBulbOn:ng_icons_iconoir.OWN,iconoirArrowLeft:ng_icons_iconoir.M_c}),(0,ng_icons_core.PG)({size:"1.5em"})],styles:[import_record_componentngResource_default()]}),(0,tslib_es6.Sn)("design:paramtypes",[router.Ix,ngx_translate_core.c$,core.ChangeDetectorRef,notifications_src.I2,records_repository_interface.w])],ImportRecordComponent);var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),i18n_src=__webpack_require__("./libs/util/i18n/src/index.ts"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");const import_record_component_stories={title:"Elements/ImportRecordComponent",component:ImportRecordComponent,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,src.Qp,elements_src.Yg,src.$1],providers:[{provide:records_repository_interface.w,useClass:class MockRecordsRepository{importRecordFromExternalFileUrlAsDraft(url){return(0,of.of)("mockedRecordTempId")}}}]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule),(0,core.importProvidersFrom)(i18n_src.D7),(0,core.importProvidersFrom)(ngx_translate_core.h.forRoot())]}),(0,dist.componentWrapperDecorator)((story=>`<div style="max-width: 500px; margin: auto;">${story}</div>`))]},Primary={args:{}}},"./libs/feature/editor/src/lib/components/import-record/import-record.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./libs/feature/notifications/src/lib/notifications-container/notifications-container.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);