import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SourcesService } from '@geonetwork-ui/feature/catalog'
import { SearchService } from '@geonetwork-ui/feature/search'
import {
  ErrorType,
  MetadataCatalogComponent,
  MetadataContactComponent,
  MetadataInfoComponent,
  SearchResultsErrorComponent,
} from '@geonetwork-ui/ui/elements'
import { BehaviorSubject, combineLatest } from 'rxjs'
import { filter, map, mergeMap } from 'rxjs/operators'
import { MdViewFacade } from '../state/mdview.facade'
import { OrganizationsServiceInterface } from '@geonetwork-ui/common/domain/organizations.service.interface'
import { Individual, Organization } from '@geonetwork-ui/common/domain/record'
import { DataOtherlinksComponent } from '../data-otherlinks/data-otherlinks.component'
import { AsyncPipe, NgIf } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { MatTabsModule } from '@angular/material/tabs'
import { MapViewComponent } from '../map-view/map-view.component'
import { DataViewComponent } from '../data-view/data-view.component'
import { DataViewShareComponent } from '../data-view-share/data-view-share.component'
import { DataDownloadsComponent } from '../data-downloads/data-downloads.component'
import { DataApisComponent } from '../data-apis/data-apis.component'
import { RelatedRecordsComponent } from '../related-records/related-records.component'

@Component({
  selector: 'gn-ui-record-metadata',
  templateUrl: './record-metadata.component.html',
  styleUrls: ['./record-metadata.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    MetadataInfoComponent,
    MetadataContactComponent,
    MetadataCatalogComponent,
    TranslateModule,
    MatTabsModule,
    MapViewComponent,
    DataViewComponent,
    DataViewShareComponent,
    DataDownloadsComponent,
    DataOtherlinksComponent,
    DataApisComponent,
    RelatedRecordsComponent,
    SearchResultsErrorComponent,
    AsyncPipe,
  ],
})
export class RecordMetadataComponent {
  displayMap$ = combineLatest([
    this.facade.mapApiLinks$,
    this.facade.geoDataLinks$,
  ]).pipe(
    map(
      ([mapLinks, geoDataLinks]) =>
        mapLinks?.length > 0 || geoDataLinks?.length > 0
    )
  )
  displayData$ = combineLatest([
    this.facade.dataLinks$,
    this.facade.geoDataLinks$,
  ]).pipe(
    map(
      ([dataLinks, geoDataLinks]) =>
        dataLinks?.length > 0 || geoDataLinks?.length > 0
    )
  )
  displayDownload$ = this.facade.downloadLinks$.pipe(
    map((links) => links?.length > 0)
  )
  displayApi$ = this.facade.apiLinks$.pipe(map((links) => links?.length > 0))
  displayOtherLinks = this.facade.otherLinks$.pipe(
    map((links) => links?.length > 0)
  )
  displayRelated$ = this.facade.related$.pipe(
    map((records) => records?.length > 0)
  )

  sourceLabel$ = this.facade.metadata$.pipe(
    map((record) => record?.extras?.catalogUuid as string),
    filter((uuid) => !!uuid),
    mergeMap((uuid) => this.sourceService.getSourceLabel(uuid))
  )

  errorTypes = ErrorType
  selectedTabIndex$ = new BehaviorSubject(0)

  constructor(
    public facade: MdViewFacade,
    private searchService: SearchService,
    private sourceService: SourcesService,
    private orgsService: OrganizationsServiceInterface
  ) {}

  onTabIndexChange(index: number): void {
    this.selectedTabIndex$.next(index)
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 0)
  }

  onInfoKeywordClick(keyword: string) {
    this.searchService.updateFilters({ any: keyword })
  }
  onOrganizationClick(org: Organization) {
    this.orgsService
      .getFiltersForOrgs([org])
      .subscribe((filters) => this.searchService.updateFilters(filters))
  }
}
