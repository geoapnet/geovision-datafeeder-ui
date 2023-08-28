import { Component } from '@angular/core'
import { SearchFacade } from '../state/search.facade'
import { AsyncPipe } from '@angular/common'
import { ResultsHitsNumberComponent } from '@geonetwork-ui/ui/search'

@Component({
  selector: 'gn-ui-results-hits',
  templateUrl: './results-hits.container.component.html',
  standalone: true,
  imports: [ResultsHitsNumberComponent, AsyncPipe],
})
export class ResultsHitsContainerComponent {
  constructor(public facade: SearchFacade) {}
}
