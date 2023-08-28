import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeatureMapModule } from '@geonetwork-ui/feature/map'
import { FeatureDetailComponent, MapComponent } from '@geonetwork-ui/ui/map'
import { GeoTableViewComponent } from './geo-table-view/geo-table-view.component'
import { FigureContainerComponent } from './figure/figure-container/figure-container.component'
import { ChartComponent, TableComponent } from '@geonetwork-ui/ui/dataviz'
import { TableViewComponent } from './table-view/table-view.component'
import { ChartViewComponent } from './chart-view/chart-view.component'
import { TranslateModule } from '@ngx-translate/core'
import {
  BadgeComponent,
  ColorScaleComponent,
  LoadingMaskComponent,
  PopupAlertComponent,
  ProgressBarComponent,
  SpinningLoaderComponent,
  StepBarComponent,
} from '@geonetwork-ui/ui/widgets'
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
import { FigureComponent } from '@geonetwork-ui/ui/dataviz'

@NgModule({
  imports: [
    CommonModule,
    FeatureMapModule,
    FeatureDetailComponent,
    MapComponent,
    TableComponent,
    BadgeComponent,
    ColorScaleComponent,
    LoadingMaskComponent,
    PopupAlertComponent,
    ProgressBarComponent,
    SpinningLoaderComponent,
    StepBarComponent,
    TranslateModule,
    ChartComponent,
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
    FigureComponent,
    GeoTableViewComponent,
    FigureContainerComponent,
    TableViewComponent,
    ChartViewComponent,
  ],
  exports: [
    GeoTableViewComponent,
    FigureContainerComponent,
    TableViewComponent,
    ChartViewComponent,
  ],
})
export class FeatureDatavizModule {}
