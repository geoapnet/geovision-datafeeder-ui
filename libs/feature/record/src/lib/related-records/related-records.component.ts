import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CatalogRecord } from '@geonetwork-ui/common/domain/record'
import { RelatedRecordCardComponent } from '@geonetwork-ui/ui/elements'
import { TranslateModule } from '@ngx-translate/core'
import { NgFor } from '@angular/common'

@Component({
  selector: 'gn-ui-related-records',
  templateUrl: './related-records.component.html',
  styleUrls: ['./related-records.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, NgFor, RelatedRecordCardComponent],
})
export class RelatedRecordsComponent {
  @Input() records: CatalogRecord[]
}
