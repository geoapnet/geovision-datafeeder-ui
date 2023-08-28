import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { NgClass, NgIf } from '@angular/common'

@Component({
  selector: 'gn-ui-copy-text-button',
  templateUrl: './copy-text-button.component.html',
  styleUrls: ['./copy-text-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgClass, MatTooltipModule, MatIconModule],
})
export class CopyTextButtonComponent {
  @Input() text: string
  @Input() tooltipText: string
  @Input() displayText = true
  @Input() rows = 1

  copyText(event: MouseEvent) {
    navigator.clipboard.writeText(this.text)
    ;(event.target as HTMLElement).blur()
  }
}
