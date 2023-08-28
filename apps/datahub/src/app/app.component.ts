import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { SearchRouterContainerDirective } from '@geonetwork-ui/feature/router'

@Component({
  selector: 'datahub-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SearchRouterContainerDirective, RouterOutlet],
})
export class AppComponent {}
