import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'gn-ui-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule],
})
export class FigureComponent {
  @Input() icon!: string
  @Input() title!: string
  @Input() figure!: string | number
  @Input() unit?: string
  @Input() color: 'primary' | 'secondary' = 'primary'

  get hoverTitle() {
    return `${this.figure.toString()} ${this.unit || ''}
${this.title}`
  }

  get textClass() {
    return this.color === 'primary' ? 'text-primary' : 'text-secondary'
  }
  get bgClass() {
    return this.color === 'primary' ? 'bg-primary-white' : 'bg-secondary-white'
  }
}
