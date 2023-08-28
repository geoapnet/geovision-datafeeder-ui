import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@Component({
  selector: 'gn-ui-loading-mask',
  templateUrl: './loading-mask.component.html',
  styleUrls: ['./loading-mask.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatProgressSpinnerModule],
})
export class LoadingMaskComponent {
  @Input() message: string
}
