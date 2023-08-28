import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MdViewFacade } from '../state'
import { ApiCardComponent } from '@geonetwork-ui/ui/elements'
import { NgFor, AsyncPipe } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gn-ui-data-apis',
  templateUrl: './data-apis.component.html',
  styleUrls: ['./data-apis.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, NgFor, ApiCardComponent, AsyncPipe],
})
export class DataApisComponent {
  constructor(public facade: MdViewFacade) {}
}
