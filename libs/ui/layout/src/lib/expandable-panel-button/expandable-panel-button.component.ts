import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common'

@Component({
  selector: 'gn-ui-expandable-panel-button',
  templateUrl: './expandable-panel-button.component.html',
  styleUrls: ['./expandable-panel-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, MatIconModule, NgClass],
})
export class ExpandablePanelButtonComponent {
  @Input() titleTemplate: TemplateRef<any>
  @Input() collapsed = true

  toggle(): void {
    this.collapsed = !this.collapsed
  }
}
