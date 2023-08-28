import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { TranslateModule } from '@ngx-translate/core'
import { ButtonComponent } from '@geonetwork-ui/ui/inputs'
import { NgIf } from '@angular/common'

@Component({
  selector: 'gn-ui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, ButtonComponent, TranslateModule, FormsModule, MatIconModule],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 1
  @Input() nPages = 1
  @Input() hideButton = false
  @Output() newCurrentPageEvent = new EventEmitter<number>()

  private applyPageBounds() {
    // make sure this works with NaN inputs as well by adding `|| 1`
    this.nPages = Math.max(1, this.nPages || 1)
    this.currentPage = Math.max(1, Math.min(this.nPages, this.currentPage || 1))
  }

  ngOnChanges(changes: SimpleChanges) {
    // make sure the inputs are valid
    if ('currentPage' in changes || 'nPages' in changes) {
      this.applyPageBounds()
    }
  }

  setPage(newPage) {
    if (!Number.isInteger(newPage)) return
    this.currentPage = newPage
    this.applyPageBounds()
    this.newCurrentPageEvent.emit(this.currentPage)
  }

  nextPage() {
    this.setPage(this.currentPage + 1)
  }

  previousPage() {
    this.setPage(this.currentPage - 1)
  }
}
