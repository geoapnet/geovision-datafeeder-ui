import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import {
  CatalogRecord,
  Individual,
  Organization,
} from '@geonetwork-ui/common/domain/record'
import { NgIf } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'gn-ui-metadata-contact',
  templateUrl: './metadata-contact.component.html',
  styleUrls: ['./metadata-contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, TranslateModule, MatIconModule],
})
export class MetadataContactComponent {
  @Input() metadata: Partial<CatalogRecord>
  @Output() organizationClick = new EventEmitter<Organization>()
  @Output() contactClick = new EventEmitter<Individual>()

  get shownOrganization() {
    return this.metadata.ownerOrganization
  }

  get contacts() {
    return (
      (this.metadata.kind === 'dataset'
        ? this.metadata.contactsForResource
        : this.metadata.contacts) || []
    )
  }

  onOrganizationClick() {
    this.organizationClick.emit(this.shownOrganization)
  }
}
