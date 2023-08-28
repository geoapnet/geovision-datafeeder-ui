import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { DatasetRecord } from '@geonetwork-ui/common/domain/record'

import { MatIconModule } from '@angular/material/icon'
import { ExpandablePanelComponent } from '@geonetwork-ui/ui/layout'
import { BadgeComponent } from '@geonetwork-ui/ui/widgets'
import { NgFor, NgIf } from '@angular/common'
import { ContentGhostComponent } from '../content-ghost/content-ghost.component'
import { TranslateModule } from '@ngx-translate/core'
import { SafePipe } from '@geonetwork-ui/util/shared'

@Component({
  selector: 'gn-ui-metadata-info',
  templateUrl: './metadata-info.component.html',
  styleUrls: ['./metadata-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TranslateModule,
    ContentGhostComponent,
    NgIf,
    NgFor,
    BadgeComponent,
    ExpandablePanelComponent,
    MatIconModule,
    SafePipe,
  ],
})
export class MetadataInfoComponent {
  @Input() metadata: Partial<DatasetRecord>
  @Input() incomplete: boolean
  @Output() keyword = new EventEmitter<string>()

  get hasUsage() {
    return (
      ('extras' in this.metadata && 'isOpenData' in this.metadata.extras) ||
      this.metadata.useLimitations?.length ||
      this.metadata.accessConstraints?.length
    )
  }

  get usages(): string[] {
    let array = []
    if (this.metadata.useLimitations?.length) {
      array = array.concat(this.metadata.useLimitations)
    }
    if (this.metadata.accessConstraints?.length) {
      array = array.concat(this.metadata.accessConstraints.map((c) => c.text))
    }
    return array
  }

  fieldReady(propName: string) {
    return !this.incomplete || propName in this.metadata
  }

  onKeywordClick(keyword: string) {
    this.keyword.emit(keyword)
  }
}
