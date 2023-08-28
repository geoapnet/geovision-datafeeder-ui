import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { UserModel } from '@geonetwork-ui/common/domain/user.model'
import { AvatarComponent } from '../avatar/avatar.component'

@Component({
  selector: 'gn-ui-user-preview',
  templateUrl: './user-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AvatarComponent],
})
export class UserPreviewComponent {
  @Input() user: UserModel
}
