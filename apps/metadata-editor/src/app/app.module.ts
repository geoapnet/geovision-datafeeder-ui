import { NgModule } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FeatureEditorModule } from '@geonetwork-ui/feature/editor'
import {
  ApiCardComponent,
  AvatarComponent,
  ContentGhostComponent,
  DownloadItemComponent,
  DownloadsListComponent,
  LinkCardComponent,
  MetadataCatalogComponent,
  MetadataContactComponent,
  MetadataInfoComponent,
  PaginationComponent,
  RelatedRecordCardComponent,
  SearchResultsErrorComponent,
  ThumbnailComponent,
  UserPreviewComponent,
} from '@geonetwork-ui/ui/elements'
import {
  AutocompleteComponent,
  ButtonComponent,
  CheckToggleComponent,
  ChipsInputComponent,
  CopyTextButtonComponent,
  DragAndDropFileInputComponent,
  DropdownMultiselectComponent,
  DropdownSelectorComponent,
  NavigationButtonComponent,
  StarToggleComponent,
  TextAreaComponent,
  TextInputComponent,
  ViewportIntersectorComponent,
} from '@geonetwork-ui/ui/inputs'
import {
  FacetListComponent,
  RecordPreviewCardComponent,
  RecordPreviewComponent,
  RecordPreviewFeedComponent,
  RecordPreviewListComponent,
  RecordPreviewRowComponent,
  RecordPreviewTextComponent,
  RecordPreviewTitleComponent,
  RecordTableComponent,
  ResultsHitsNumberComponent,
  ResultsListComponent,
  ResultsListItemComponent,
} from '@geonetwork-ui/ui/search'
import {
  TRANSLATE_DEFAULT_CONFIG,
  UtilI18nModule,
} from '@geonetwork-ui/util/i18n'
import { TranslateModule } from '@ngx-translate/core'
import { AppCommonModule } from './app.common.module'

import { AppComponent } from './app.component'
import { appRoutes } from './app.routes'
import { CreatePageComponent } from './create/create-page.component'
import { DashboardModule } from './dashboard/dashboard.module'
import { EditPageComponent } from './edit/edit-page.component'
import { SignInPageComponent } from './sign-in/sign-in-page.component'
import { FeatureCatalogModule } from '@geonetwork-ui/feature/catalog'

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent,
    CreatePageComponent,
    SignInPageComponent,
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ApiCardComponent,
    AvatarComponent,
    ContentGhostComponent,
    DownloadItemComponent,
    DownloadsListComponent,
    LinkCardComponent,
    MetadataCatalogComponent,
    MetadataContactComponent,
    MetadataInfoComponent,
    PaginationComponent,
    RelatedRecordCardComponent,
    SearchResultsErrorComponent,
    ThumbnailComponent,
    UserPreviewComponent,
    FacetListComponent,
    RecordPreviewComponent,
    RecordPreviewCardComponent,
    RecordPreviewFeedComponent,
    RecordPreviewListComponent,
    RecordPreviewRowComponent,
    RecordPreviewTextComponent,
    RecordPreviewTitleComponent,
    RecordTableComponent,
    ResultsHitsNumberComponent,
    ResultsListComponent,
    ResultsListItemComponent,
    AppCommonModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    AutocompleteComponent,
    ButtonComponent,
    CheckToggleComponent,
    ChipsInputComponent,
    CopyTextButtonComponent,
    DragAndDropFileInputComponent,
    DropdownSelectorComponent,
    DropdownMultiselectComponent,
    NavigationButtonComponent,
    StarToggleComponent,
    TextAreaComponent,
    TextInputComponent,
    ViewportIntersectorComponent,
    FeatureEditorModule,
    UtilI18nModule,
    TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
    MatProgressSpinnerModule,
    FeatureCatalogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
