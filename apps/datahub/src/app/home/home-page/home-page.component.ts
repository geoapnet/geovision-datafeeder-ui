import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HomeHeaderComponent } from '../home-header/home-header.component'
import { StickyHeaderComponent } from '@geonetwork-ui/ui/layout'

@Component({
  selector: 'datahub-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [StickyHeaderComponent, HomeHeaderComponent, RouterOutlet],
})
export class HomePageComponent {}
