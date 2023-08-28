import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { Organization } from '@geonetwork-ui/common/domain/record'
import { ThumbnailComponent } from '@geonetwork-ui/ui/elements'
import { MatIconModule } from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'gn-ui-organisation-preview',
  templateUrl: './organisation-preview.component.html',
  styleUrls: ['./organisation-preview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ThumbnailComponent, MatIconModule, TranslateModule],
})
export class OrganisationPreviewComponent {
  @Input() organisation: Organization
  @Input() organisationUrl: string
  @Output() clickedOrganisation = new EventEmitter<Organization>()

  clickOrganisation(event: Event) {
    event.preventDefault()
    this.clickedOrganisation.emit(this.organisation)
  }
}
