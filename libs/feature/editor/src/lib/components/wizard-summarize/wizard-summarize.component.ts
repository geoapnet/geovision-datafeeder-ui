import { Component } from '@angular/core'
import { WizardService } from '../../services/wizard.service'
import { TranslateService, TranslateModule } from '@ngx-translate/core'
import { UpperCasePipe } from '@angular/common'

@Component({
  selector: 'gn-ui-wizard-summarize',
  templateUrl: './wizard-summarize.component.html',
  styleUrls: ['./wizard-summarize.component.css'],
  standalone: true,
  imports: [TranslateModule, UpperCasePipe],
})
export class WizardSummarizeComponent {
  get title() {
    return this.wizardService.getWizardFieldData('title') || ''
  }

  get abstract() {
    return this.wizardService.getWizardFieldData('abstract') || ''
  }

  get tags(): string {
    if (!this.wizardService.getWizardFieldData('tags')) {
      return ''
    }

    return JSON.parse(this.wizardService.getWizardFieldData('tags'))
      .map((t) => t.display)
      .join(' - ')
  }

  get createdDate() {
    const time = this.wizardService.getWizardFieldData('datepicker')
    const locale = this.translateService.currentLang

    return new Date(Number(time)).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  get scale() {
    if (!this.wizardService.getWizardFieldData('dropdown')) {
      return ''
    }

    const scaleValue = JSON.parse(
      this.wizardService.getWizardFieldData('dropdown')
    )
    return `1:${scaleValue}`
  }

  get description() {
    return this.wizardService.getWizardFieldData('description') || ''
  }

  constructor(
    private wizardService: WizardService,
    private translateService: TranslateService
  ) {}
}
