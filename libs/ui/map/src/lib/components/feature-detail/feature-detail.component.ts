import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import Feature from 'ol/Feature'
import { Geometry } from 'ol/geom'
import { NgFor, NgIf } from '@angular/common'

const geometryKeys = ['geometry', 'the_geom']

@Component({
  selector: 'gn-ui-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor],
})
export class FeatureDetailComponent {
  @Input() feature: Feature<Geometry>

  get properties() {
    return Object.keys(this.feature.getProperties()).filter(
      (prop) => !geometryKeys.includes(prop)
    )
  }
}
