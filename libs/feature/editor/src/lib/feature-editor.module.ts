import { NgModule } from '@angular/core'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { WizardComponent } from './components/wizard/wizard.component'
import { WizardFieldComponent } from './components/wizard-field/wizard-field.component'
import {
  AutocompleteComponent,
  ButtonComponent,
  CheckToggleComponent,
  ChipsInputComponent,
  CopyTextButtonComponent,
  DragAndDropFileInputComponent,
  DropdownMultiselectComponent,
  DropdownSelectorComponent,
  NavigationButtonComponent,
  StarToggleComponent,
  TextAreaComponent,
  TextInputComponent,
  ViewportIntersectorComponent,
} from '@geonetwork-ui/ui/inputs'
import {
  BadgeComponent,
  ColorScaleComponent,
  LoadingMaskComponent,
  PopupAlertComponent,
  ProgressBarComponent,
  SpinningLoaderComponent,
  StepBarComponent,
} from '@geonetwork-ui/ui/widgets'
import { BrowserModule } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { WizardSummarizeComponent } from './components/wizard-summarize/wizard-summarize.component'
import { CommonModule } from '@angular/common'
import { RecordFormComponent } from './record-form/record-form.component'
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'

@NgModule({
  imports: [
    BrowserModule,
    AutocompleteComponent,
    ButtonComponent,
    CheckToggleComponent,
    ChipsInputComponent,
    CopyTextButtonComponent,
    DragAndDropFileInputComponent,
    DropdownSelectorComponent,
    DropdownMultiselectComponent,
    NavigationButtonComponent,
    StarToggleComponent,
    TextAreaComponent,
    TextInputComponent,
    ViewportIntersectorComponent,
    BadgeComponent,
    ColorScaleComponent,
    LoadingMaskComponent,
    PopupAlertComponent,
    ProgressBarComponent,
    SpinningLoaderComponent,
    StepBarComponent,
    TranslateModule.forChild(),
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    HttpClientXsrfModule,
    WizardComponent,
    WizardFieldComponent,
    WizardSummarizeComponent,
    RecordFormComponent,
  ],
  exports: [WizardComponent, WizardSummarizeComponent, RecordFormComponent],
})
export class FeatureEditorModule {}
export * from './services/wizard.service'
export * from './models/index'
