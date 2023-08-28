import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MapFacade } from '../+state/map.facade'
import { AddLayerFromCatalogComponent } from '../add-layer-from-catalog/add-layer-from-catalog.component'
import { MatTabsModule } from '@angular/material/tabs'
import { ExpandablePanelButtonComponent } from '@geonetwork-ui/ui/layout'
import { NgFor, AsyncPipe } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'gn-ui-layers-panel',
  templateUrl: './layers-panel.component.html',
  styleUrls: ['./layers-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatIconModule,
    TranslateModule,
    NgFor,
    ExpandablePanelButtonComponent,
    MatTabsModule,
    AddLayerFromCatalogComponent,
    AsyncPipe,
  ],
})
export class LayersPanelComponent {
  layers$ = this.mapFacade.layers$
  constructor(private mapFacade: MapFacade) {}

  deleteLayer(index: number) {
    this.mapFacade.removeLayer(index)
  }
}
