import { Component, Input } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { NgIf } from '@angular/common'

@Component({
  selector: 'gn-ui-results-hits-number',
  templateUrl: './results-hits-number.component.html',
  standalone: true,
  imports: [NgIf, TranslateModule],
})
export class ResultsHitsNumberComponent {
  @Input() hits: number
  @Input() loading: boolean
}
