import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'
import { NgIf } from '@angular/common'

export enum ErrorType {
  COULD_NOT_REACH_API,
  RECEIVED_ERROR,
  RECORD_NOT_FOUND,
}

@Component({
  selector: 'gn-ui-search-results-error',
  templateUrl: './search-results-error.component.html',
  styleUrls: ['./search-results-error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, MatIconModule, TranslateModule],
})
export class SearchResultsErrorComponent {
  @Input() type!: ErrorType
  @Input() error?: string
  @Input() recordId?: string
  types = ErrorType
}
