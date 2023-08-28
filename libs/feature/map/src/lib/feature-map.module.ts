import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureDetailComponent, MapComponent } from '@geonetwork-ui/ui/map'
import { defaultMapOptions, FEATURE_MAP_OPTIONS } from './constant'
import { MapInstanceDirective } from './manager/map-instance.directive'
import { MapContextComponent } from './map-context/component/map-context.component'
import { LayersPanelComponent } from './layers-panel/layers-panel.component'
import {
  AnchorLinkDirective,
  ExpandablePanelButtonComponent,
  ExpandablePanelComponent,
  StickyHeaderComponent,
} from '@geonetwork-ui/ui/layout'
import { MatIconModule } from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs'
import { TranslateModule } from '@ngx-translate/core'
import { AddLayerFromCatalogComponent } from './add-layer-from-catalog/add-layer-from-catalog.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import * as fromMap from './+state/map.reducer'
import { MapEffects } from './+state/map.effects'
import { MapFacade } from './+state/map.facade'
import { MapContainerComponent } from './map-container/map-container.component'
import { AddLayerRecordPreviewComponent } from './add-layer-from-catalog/add-layer-record-preview/add-layer-record-preview.component'
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

@NgModule({
  exports: [
    MapContextComponent,
    MapInstanceDirective,
    LayersPanelComponent,
    AddLayerFromCatalogComponent,
    MapContainerComponent,
  ],
  imports: [
    CommonModule,
    FeatureDetailComponent,
    MapComponent,
    AnchorLinkDirective,
    ExpandablePanelComponent,
    ExpandablePanelButtonComponent,
    StickyHeaderComponent,
    MatIconModule,
    MatTabsModule,
    TranslateModule,

    StoreModule.forFeature(fromMap.MAP_FEATURE_KEY, fromMap.mapReducer),
    EffectsModule.forFeature([MapEffects]),
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
    MapContextComponent,
    MapInstanceDirective,
    LayersPanelComponent,
    AddLayerFromCatalogComponent,
    MapContainerComponent,
    AddLayerRecordPreviewComponent,
  ],
  providers: [
    {
      provide: FEATURE_MAP_OPTIONS,
      useValue: defaultMapOptions,
    },
    MapFacade,
  ],
})
export class FeatureMapModule {}
