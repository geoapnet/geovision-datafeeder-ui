import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CatalogRecord } from '@geonetwork-ui/common/domain/record'
import { RouterLink } from '@angular/router'
import { ThumbnailComponent } from '../thumbnail/thumbnail.component'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatIconModule } from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gn-ui-related-record-card',
  templateUrl: './related-record-card.component.html',
  styleUrls: ['./related-record-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    RouterLink,
    ThumbnailComponent,
    MatTooltipModule,
    MatIconModule,
    TranslateModule,
  ],
})
export class RelatedRecordCardComponent {
  @Input() record: CatalogRecord
}
