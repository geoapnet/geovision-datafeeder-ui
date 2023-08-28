import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgClass } from '@angular/common'

@Component({
  selector: 'gn-ui-form-field-rich',
  templateUrl: './form-field-rich.component.html',
  styleUrls: ['./form-field-rich.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
})
export class FormFieldRichComponent {
  @Input() control!: FormControl
  @Input() readonly = false
  @Input() invalid = false
  @Input() placeholder = ''
}
