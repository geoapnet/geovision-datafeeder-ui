import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core'
import {
  DEFAULT_RESULTS_LAYOUT_CONFIG,
  ResultsLayoutConfigItem,
} from './results-layout.config'
import { CatalogRecord } from '@geonetwork-ui/common/domain/record'
import { NgClass, NgFor } from '@angular/common'
import { ResultsListItemComponent } from '../results-list-item/results-list-item.component'

@Component({
  selector: 'gn-ui-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass, NgFor, ResultsListItemComponent],
})
export class ResultsListComponent {
  @Input() records: CatalogRecord[]
  @Input() layoutConfig: ResultsLayoutConfigItem =
    DEFAULT_RESULTS_LAYOUT_CONFIG['CARD']
  @Input() favoriteTemplate: TemplateRef<{ $implicit: CatalogRecord }>
  @Input() recordUrlGetter: (record: CatalogRecord) => string
  @Output() mdSelect = new EventEmitter<CatalogRecord>()
}
