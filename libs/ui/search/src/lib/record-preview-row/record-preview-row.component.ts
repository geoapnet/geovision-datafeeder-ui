import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core'
import { RecordPreviewComponent } from '../record-preview/record-preview.component'
import { MatIconModule } from '@angular/material/icon'
import { NgIf, NgTemplateOutlet } from '@angular/common'
import { ThumbnailComponent } from '@geonetwork-ui/ui/elements'

@Component({
  selector: 'gn-ui-record-preview-row',
  templateUrl: './record-preview-row.component.html',
  styleUrls: ['./record-preview-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ThumbnailComponent, NgIf, MatIconModule, NgTemplateOutlet],
})
export class RecordPreviewRowComponent extends RecordPreviewComponent {
  constructor(protected elementRef: ElementRef) {
    super(elementRef)
  }
}
