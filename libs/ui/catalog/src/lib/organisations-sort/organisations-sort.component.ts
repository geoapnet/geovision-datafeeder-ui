import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { marker } from '@biesbjerg/ngx-translate-extract-marker'
import { SortByField } from '@geonetwork-ui/common/domain/search'
import { TranslateModule } from '@ngx-translate/core'
import { DropdownSelectorComponent } from '@geonetwork-ui/ui/inputs'

@Component({
  selector: 'gn-ui-organisations-sort',
  templateUrl: './organisations-sort.component.html',
  styleUrls: ['./organisations-sort.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, DropdownSelectorComponent],
})
export class OrganisationsSortComponent {
  choices: { value: string; label: string }[] = [
    {
      value: 'asc,name',
      label: marker('organisations.sortBy.nameAsc'),
    },
    {
      value: 'desc,name',
      label: marker('organisations.sortBy.nameDesc'),
    },
    {
      value: 'asc,recordCount',
      label: marker('organisations.sortBy.recordCountAsc'),
    },
    {
      value: 'desc,recordCount',
      label: marker('organisations.sortBy.recordCountDesc'),
    },
  ]
  @Output() sortBy = new EventEmitter<SortByField>()

  selectOrderToDisplay(selectValue: string) {
    this.sortBy.emit(selectValue.split(',') as SortByField)
  }
}
