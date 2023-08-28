import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Optional,
} from '@angular/core'
import {
  WEB_COMPONENT_EMBEDDER_URL,
  DataViewPermalinkComponent,
} from '../data-view-permalink/data-view-permalink.component'
import { DataViewWebComponentComponent } from '../data-view-web-component/data-view-web-component.component'
import { TranslateModule } from '@ngx-translate/core'
import { NgIf } from '@angular/common'
import { MatTabsModule } from '@angular/material/tabs'

@Component({
  selector: 'gn-ui-data-view-share',
  templateUrl: './data-view-share.component.html',
  styleUrls: ['./data-view-share.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatTabsModule,
    NgIf,
    TranslateModule,
    DataViewPermalinkComponent,
    DataViewWebComponentComponent,
  ],
})
export class DataViewShareComponent {
  constructor(
    @Optional()
    @Inject(WEB_COMPONENT_EMBEDDER_URL)
    protected wcEmbedderBaseUrl: string
  ) {}
}
