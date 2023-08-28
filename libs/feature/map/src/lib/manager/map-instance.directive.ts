import { Directive } from '@angular/core'
import { MapManagerService } from './map-manager.service'

@Directive({
  selector: '[gnUiMapContainer]',
  providers: [MapManagerService],
  standalone: true,
})
export class MapInstanceDirective {
  constructor(private manager: MapManagerService) {}
}
