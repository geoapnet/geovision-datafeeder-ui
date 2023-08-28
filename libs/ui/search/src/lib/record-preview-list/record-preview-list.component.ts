import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RecordPreviewComponent } from '../record-preview/record-preview.component'
import { TranslateModule } from '@ngx-translate/core'
import { NgIf } from '@angular/common'
import { ThumbnailComponent } from '@geonetwork-ui/ui/elements'

@Component({
  selector: 'gn-ui-record-preview-list',
  templateUrl: './record-preview-list.component.html',
  styleUrls: ['./record-preview-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ThumbnailComponent, NgIf, TranslateModule],
})
export class RecordPreviewListComponent extends RecordPreviewComponent {}
