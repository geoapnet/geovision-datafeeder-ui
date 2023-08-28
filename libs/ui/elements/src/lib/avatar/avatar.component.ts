import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'gn-ui-avatar',
  templateUrl: './avatar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf],
})
export class AvatarComponent {
  @Input() avatarUrl?: string

  hideImage() {
    this.avatarUrl = null
  }
}
