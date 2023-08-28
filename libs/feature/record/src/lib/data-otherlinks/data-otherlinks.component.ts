import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MdViewFacade } from '../state'
import { LinkCardComponent } from '@geonetwork-ui/ui/elements'
import { NgFor, AsyncPipe } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gn-ui-data-otherlinks',
  templateUrl: './data-otherlinks.component.html',
  styleUrls: ['./data-otherlinks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, NgFor, LinkCardComponent, AsyncPipe],
})
export class DataOtherlinksComponent {
  constructor(public facade: MdViewFacade) {}
}
