import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { MdViewFacade } from '@geonetwork-ui/feature/record'
import { AsyncPipe } from '@angular/common'
import { RecordMetadataComponent } from '@geonetwork-ui/feature/record'
import { HeaderRecordComponent } from '../header-record/header-record.component'

@Component({
  selector: 'datahub-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderRecordComponent, RecordMetadataComponent, AsyncPipe],
})
export class RecordPageComponent implements OnDestroy {
  constructor(public mdViewFacade: MdViewFacade) {
    document.documentElement.classList.add('record-page-active')
  }
  ngOnDestroy() {
    document.documentElement.classList.remove('record-page-active')
  }
}
