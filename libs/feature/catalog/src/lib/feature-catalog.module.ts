import { NgModule } from '@angular/core'
import {
  GroupsApiService,
  SearchApiService,
} from '@geonetwork-ui/data-access/gn4'
import { TranslateService } from '@ngx-translate/core'
import { OrganizationsServiceInterface } from '@geonetwork-ui/common/domain/organizations.service.interface'
import {
  ElasticsearchService,
  ORGANIZATIONS_STRATEGY,
  OrganizationsFromGroupsService,
  OrganizationsFromMetadataService,
  OrganizationsStrategy,
} from '@geonetwork-ui/api/repository/gn4'

// expects the replacement key ${name}

const organizationsServiceFactory = (
  strategy: OrganizationsStrategy,
  esService: ElasticsearchService,
  searchApiService: SearchApiService,
  groupsApiService: GroupsApiService,
  translateService: TranslateService
) =>
  strategy === 'groups'
    ? new OrganizationsFromGroupsService(
        esService,
        searchApiService,
        groupsApiService,
        translateService
      )
    : new OrganizationsFromMetadataService(
        esService,
        searchApiService,
        groupsApiService
      )

@NgModule({
  providers: [
    {
      provide: OrganizationsServiceInterface,
      useFactory: organizationsServiceFactory,
      deps: [
        ORGANIZATIONS_STRATEGY,
        ElasticsearchService,
        SearchApiService,
        GroupsApiService,
        TranslateService,
      ],
    },
  ],
})
export class FeatureCatalogModule {}
