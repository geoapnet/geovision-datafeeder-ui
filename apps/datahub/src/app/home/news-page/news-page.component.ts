import { ChangeDetectionStrategy, Component } from '@angular/core'
import { KeyFiguresComponent } from './key-figures/key-figures.component'
import { LastCreatedComponent } from './last-created/last-created.component'
import { TranslateModule } from '@ngx-translate/core'
import { SearchStateContainerDirective } from '@geonetwork-ui/feature/search'

@Component({
  selector: 'datahub-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    SearchStateContainerDirective,
    TranslateModule,
    LastCreatedComponent,
    KeyFiguresComponent,
  ],
})
export class NewsPageComponent {}
