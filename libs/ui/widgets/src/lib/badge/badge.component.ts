import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'

@Component({
  selector: 'gn-ui-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass],
})
export class BadgeComponent {
  @Input() clickable? = false
}
