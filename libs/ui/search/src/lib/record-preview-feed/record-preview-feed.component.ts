import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core'
import { RecordPreviewComponent } from '../record-preview/record-preview.component'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import Duration from 'duration-relativetimeformat'
import { ThumbnailComponent } from '@geonetwork-ui/ui/elements'
import { MatIconModule } from '@angular/material/icon'
import { NgIf, NgTemplateOutlet } from '@angular/common'

@Component({
  selector: 'gn-ui-record-preview-feed',
  templateUrl: './record-preview-feed.component.html',
  styleUrls: ['./record-preview-feed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    MatIconModule,
    ThumbnailComponent,
    TranslateModule,
    NgTemplateOutlet,
  ],
})
export class RecordPreviewFeedComponent extends RecordPreviewComponent {
  timeFormat = new Duration(this.translate.currentLang, {})

  constructor(
    protected elementRef: ElementRef,
    private translate: TranslateService
  ) {
    super(elementRef)
  }

  get hasOrganization() {
    return true // FIXME: this doesn't make sense anymore, there should always be an owner org
  }
  get hasLogo() {
    return (
      'logoUrl' in this.record.ownerOrganization &&
      !!this.record.ownerOrganization.logoUrl
    )
  }
  get hasOnlyPerson() {
    return false // FIXME: this doesn't make sense anymore, there should always be an owner org
  }
  get time() {
    return this.timeFormat.format(this.record.recordCreated, Date.now())
  }
}
