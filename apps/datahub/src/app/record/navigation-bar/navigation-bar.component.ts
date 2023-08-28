import { Component, ChangeDetectionStrategy } from '@angular/core'
import { marker } from '@biesbjerg/ngx-translate-extract-marker'
import { MatIconModule } from '@angular/material/icon'
import { AnchorLinkDirective } from '@geonetwork-ui/ui/layout'
import { TranslateModule } from '@ngx-translate/core'
import { NgFor } from '@angular/common'

marker('record.metadata.about')
marker('record.metadata.preview')
marker('record.metadata.download')
marker('record.metadata.links')

@Component({
  selector: 'datahub-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgFor, TranslateModule, AnchorLinkDirective, MatIconModule],
})
export class NavigationBarComponent {
  displayMobileMenu = false
  anchorLinks = [
    {
      anchor: 'about',
      label: 'record.metadata.about',
    },
    {
      anchor: 'preview',
      label: 'record.metadata.preview',
    },
    {
      anchor: 'access',
      label: 'record.metadata.download',
    },
    {
      anchor: 'links',
      label: 'record.metadata.links',
    },
  ]
  activeLabel = this.anchorLinks[0].label
  setActiveLabel(el: HTMLElement) {
    const disabledClass = el.getAttribute('gnUiAnchorLinkDisabledClass')
    const disabled = new RegExp(disabledClass).test(el.className)
    if (!disabled) this.activeLabel = el.textContent
  }
  toggleMobileMenu() {
    this.displayMobileMenu = !this.displayMobileMenu
  }
}
