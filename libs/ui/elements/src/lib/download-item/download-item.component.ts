import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { DatasetDistribution } from '@geonetwork-ui/common/domain/record'
import { NgIf } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf, TranslateModule, MatIconModule],
  selector: 'gn-ui-download-item',
  standalone: true,
  styleUrls: ['./download-item.component.css'],
  templateUrl: './download-item.component.html',
})
export class DownloadItemComponent {
  @Input() link: DatasetDistribution
  @Input() color: string
  @Input() format: string
  @Input() isFromWfs: boolean
  @Output() exportUrl = new EventEmitter<string>()

  openUrl() {
    this.exportUrl.emit(this.link.url.toString())
  }
}
