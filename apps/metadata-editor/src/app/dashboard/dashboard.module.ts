import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { BrowserModule } from '@angular/platform-browser'
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
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { LetDirective } from '@ngrx/component'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { TranslateModule } from '@ngx-translate/core'
import {
  EDITOR_DASHBOARD_FEATURE_STATE_KEY,
  reducer,
} from './+state/dashboard.reducer'
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component'
import { DashboardPageComponent } from './dashboard-page.component'
import { SearchHeaderComponent } from './search-header/search-header.component'
import { SidebarComponent } from './sidebar/sidebar.component'

@NgModule({
  declarations: [
    DashboardPageComponent,
    SidebarComponent,
    SearchHeaderComponent,
    DashboardMenuComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule,
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
    LetDirective,
    StoreModule.forFeature(EDITOR_DASHBOARD_FEATURE_STATE_KEY, reducer),
    EffectsModule.forFeature(),
    TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
  ],
  exports: [DashboardPageComponent],
})
export class DashboardModule {}
