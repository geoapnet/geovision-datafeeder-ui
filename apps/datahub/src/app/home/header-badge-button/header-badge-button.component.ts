import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'
import { NgIf } from '@angular/common'

@Component({
  selector: 'datahub-header-badge-button',
  templateUrl: './header-badge-button.component.html',
  styleUrls: ['./header-badge-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, MatIconModule, TranslateModule],
})
export class HeaderBadgeButtonComponent {
  @Input() label: string
  @Input() icon: string
  @Input() toggled: boolean
  @Output() action = new EventEmitter<boolean>()

  toggle() {
    this.toggled = !this.toggled
    this.action.emit(this.toggled)
  }
}
