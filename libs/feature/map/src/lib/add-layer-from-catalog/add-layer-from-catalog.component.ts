import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import {
  FIELDS_BRIEF,
  SearchFacade,
  SearchService,
} from '@geonetwork-ui/feature/search'
import {
  RESULTS_LAYOUT_CONFIG,
  ResultsLayoutConfigItem,
} from '@geonetwork-ui/ui/search'
import { AddLayerRecordPreviewComponent } from './add-layer-record-preview/add-layer-record-preview.component'
import { ResultsListContainerComponent } from '@geonetwork-ui/feature/search'
import { FuzzySearchComponent } from '@geonetwork-ui/feature/search'

@Component({
  selector: 'gn-ui-add-layer-from-catalog',
  templateUrl: './add-layer-from-catalog.component.html',
  styleUrls: ['./add-layer-from-catalog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    SearchFacade,
    SearchService,
    {
      provide: RESULTS_LAYOUT_CONFIG,
      useValue: {
        ADDLAYER: new ResultsLayoutConfigItem(
          AddLayerRecordPreviewComponent,
          'py-2',
          '',
          'flex flex-col divide-y divide-y-grey-50'
        ),
      },
    },
  ],
  standalone: true,
  imports: [FuzzySearchComponent, ResultsListContainerComponent],
})
export class AddLayerFromCatalogComponent implements OnInit {
  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.searchFacade.init('map-add-layer')
    this.searchFacade.setConfigRequestFields([...FIELDS_BRIEF, 'link'])
    this.searchFacade.setFilters({
      availableInServices: '+linkProtocol:/OGC:WMS.*/',
    })
  }
}
