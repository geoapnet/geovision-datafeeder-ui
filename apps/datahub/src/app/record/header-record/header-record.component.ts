import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import {
  FavoriteStarComponent,
  SearchService,
} from '@geonetwork-ui/feature/search'
import { getThemeConfig } from '@geonetwork-ui/util/app-config'
import { CatalogRecord } from '@geonetwork-ui/common/domain/record'
import { TranslateModule } from '@ngx-translate/core'
import { NgIf } from '@angular/common'
import { NavigationButtonComponent } from '@geonetwork-ui/ui/inputs'
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component'

@Component({
  selector: 'datahub-header-record',
  templateUrl: './header-record.component.html',
  styleUrls: ['./header-record.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    FavoriteStarComponent,
    NavigationButtonComponent,
    NavigationBarComponent,
    TranslateModule,
  ],
})
export class HeaderRecordComponent {
  @Input() metadata: CatalogRecord
  backgroundCss =
    getThemeConfig().HEADER_BACKGROUND ||
    `center /cover url('assets/img/header_bg.webp')`
  foregroundColor = getThemeConfig().HEADER_FOREGROUND_COLOR || '#ffffff'

  constructor(private searchService: SearchService) {}

  back() {
    this.searchService.updateFilters({})
  }
}
