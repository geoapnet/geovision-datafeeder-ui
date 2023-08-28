import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgClass } from '@angular/common'

@Component({
  selector: 'gn-ui-form-field-file',
  templateUrl: './form-field-file.component.html',
  styleUrls: ['./form-field-file.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgClass],
})
export class FormFieldFileComponent {
  @Input() control!: FormControl
  @Input() readonly = false
  @Input() invalid = false
  @Input() placeholder = ''
}
