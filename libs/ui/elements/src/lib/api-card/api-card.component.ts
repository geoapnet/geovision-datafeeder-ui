import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { DatasetServiceDistribution } from '@geonetwork-ui/common/domain/record'
import { CopyTextButtonComponent } from '@geonetwork-ui/ui/inputs'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gn-ui-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CopyTextButtonComponent, TranslateModule],
})
export class ApiCardComponent {
  @Input() link: DatasetServiceDistribution
}
