import {
  applicationConfig,
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { importProvidersFrom } from '@angular/core'
import { ExpandablePanelComponent } from './expandable-panel.component'

export default {
  title: 'Layout/Expandable Panel',
  component: ExpandablePanelComponent,
  decorators: [
    moduleMetadata({
      imports: [ExpandablePanelComponent],
    }),
    applicationConfig({
      providers: [importProvidersFrom(BrowserAnimationsModule)],
    }),
    componentWrapperDecorator(
      (story) => `<div style="max-width: 700px">${story}</div>`
    ),
  ],
} as Meta<ExpandablePanelComponent>

export const Primary: StoryObj<ExpandablePanelComponent> = {
  render: (args) => ({
    props: args,
    template: `
    <gn-ui-expandable-panel title="Panel Title">
      Illud tamen clausos vehementer angebat quod captis navigiis,
      quae frumenta vehebant per flumen, Isauri quidem alimentorum
      copiis adfluebant, ipsi vero solitarum rerum cibos iam consumendo
      inediae propinquantis aerumnas exitialis horrebant.
    </gn-ui-expandable-panel>`,
  }),
}
