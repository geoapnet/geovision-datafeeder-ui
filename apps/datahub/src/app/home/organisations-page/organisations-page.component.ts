import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SearchService } from '@geonetwork-ui/feature/search'
import { OrganizationsServiceInterface } from '@geonetwork-ui/common/domain/organizations.service.interface'
import { Organization } from '@geonetwork-ui/common/domain/record'
import { OrganisationsComponent } from '@geonetwork-ui/feature/catalog'

@Component({
  selector: 'datahub-organisations-page',
  templateUrl: './organisations-page.component.html',
  styleUrls: ['./organisations-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [OrganisationsComponent],
})
export class OrganisationsPageComponent {
  constructor(
    private searchService: SearchService,
    private orgsService: OrganizationsServiceInterface
  ) {}

  searchByOrganisation(organisation: Organization) {
    this.orgsService
      .getFiltersForOrgs([organisation])
      .subscribe((filters) => this.searchService.setFilters(filters))
  }
}
