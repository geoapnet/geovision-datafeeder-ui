import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { DatasetDistribution } from '@geonetwork-ui/common/domain/record'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'gn-ui-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule],
})
export class LinkCardComponent {
  @Input() link: DatasetDistribution
}
