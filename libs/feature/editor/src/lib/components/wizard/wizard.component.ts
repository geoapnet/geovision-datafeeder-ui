import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { TranslateService, TranslateModule } from '@ngx-translate/core'
import { take } from 'rxjs/operators'
import { WizardFieldModel } from '../../models/wizard-field.model'
import { WizardService } from '../../services/wizard.service'
import { ButtonComponent } from '@geonetwork-ui/ui/inputs'
import { WizardFieldComponent } from '../wizard-field/wizard-field.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'gn-ui-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  standalone: true,
  imports: [NgFor, WizardFieldComponent, ButtonComponent, TranslateModule],
})
export class WizardComponent implements OnInit, AfterViewInit {
  @Input() id: string
  @Input() initialConfig: {
    configuration: WizardFieldModel[][]
    storageKey: string
  }
  @Input() requiredMsgKey: string

  @Output() stepChanges = new EventEmitter<number>()
  @Output() stepsNumber = new EventEmitter<number>()

  @ViewChild('wizardFields') wizardFieldsEl: ElementRef<HTMLElement>

  currentStep: number
  configuration: WizardFieldModel[]

  constructor(
    private wizardService: WizardService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.wizardService.initialize(this.id, this.initialConfig)

    this.initializeCurrentStep()
    this.stepChanges.emit(this.wizardService.getCurrentStep())
    this.stepsNumber.emit(this.wizardService.getConfigurationStepNumber())
  }

  ngAfterViewInit() {
    this.setFocus()
  }

  handlePreviousBtnClick() {
    this.onStepChange(this.currentStep - 1)

    this.stepChanges.emit(this.currentStep)
  }

  handleNextBtnClick() {
    if (
      this.wizardFieldsEl?.nativeElement?.querySelectorAll('.invalid').length >
      0
    ) {
      this.translate.get(this.requiredMsgKey).pipe(take(1)).subscribe(alert)
      return
    }
    this.onStepChange(this.currentStep + 1)

    this.stepChanges.emit(this.currentStep)
  }

  onStepChange(step: number) {
    this.wizardService.onWizardStepChanged(step)

    this.setFocus()
    this.initializeCurrentStep()
  }

  private initializeCurrentStep() {
    this.currentStep = this.wizardService.getCurrentStep()
    this.configuration = this.wizardService.getStepConfiguration()
  }

  private setFocus() {
    setTimeout(() => {
      const inputEl = this.wizardFieldsEl.nativeElement.querySelectorAll(
        'input, textarea, select'
      )[0] as HTMLElement
      inputEl.focus()
    }, 0)
  }
}
