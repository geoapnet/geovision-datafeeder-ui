import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { RouterFacade } from '@geonetwork-ui/feature/router'
import { FIELDS_BRIEF, SearchFacade } from '@geonetwork-ui/feature/search'
import { CatalogRecord } from '@geonetwork-ui/common/domain/record'
import { ResultsListContainerComponent } from '@geonetwork-ui/feature/search'

@Component({
  selector: 'datahub-last-created',
  templateUrl: './last-created.component.html',
  styleUrls: ['./last-created.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ResultsListContainerComponent],
})
export class LastCreatedComponent implements OnInit {
  constructor(
    private searchFacade: SearchFacade,
    private routerFacade: RouterFacade
  ) {}

  ngOnInit() {
    this.searchFacade
      .setConfigRequestFields([...FIELDS_BRIEF, 'createDate', 'changeDate'])
      .setPagination(0, 10)
      .setSortBy(['desc', 'createDate'])
      .setResultsLayout('FEED')
  }

  onMetadataSelection(metadata: CatalogRecord): void {
    this.routerFacade.goToMetadata(metadata)
  }
}
