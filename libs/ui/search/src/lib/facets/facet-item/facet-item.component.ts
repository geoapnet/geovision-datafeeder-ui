import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { NgIf } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'gn-ui-facet-item',
  templateUrl: './facet-item.component.html',
  styleUrls: ['./facet-item.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf, TranslateModule],
})
export class FacetItemComponent {
  @Input() label: string
  @Input() count: number
  @Input() selected: boolean
  @Input() inverted: boolean

  @Output() selectedChange = new EventEmitter<boolean>()
  @Output() invertedChange = new EventEmitter<boolean>()

  onSelectedChange(value: boolean) {
    this.selectedChange.emit(value)
  }

  onInvertedChange(value: boolean) {
    this.invertedChange.emit(value)
  }

  toggleInverted() {
    this.inverted = !this.inverted
    this.onInvertedChange(this.inverted)
  }
}

@Component({ selector: 'gn-ui-facet-item', template: '' })
export class FacetItemStubComponent implements Partial<FacetItemComponent> {
  @Input() label: string
  @Input() count: number
  @Input() selected: boolean
  @Input() inverted: boolean

  @Output() selectedChange = new EventEmitter<boolean>()
  @Output() invertedChange = new EventEmitter<boolean>()
}
