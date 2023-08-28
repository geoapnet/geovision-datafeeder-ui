import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'
import { RecordPreviewCardComponent } from './record-preview-card.component'
import { importProvidersFrom } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

export default {
  title: 'Search/RecordPreviewCardComponent',
  component: RecordPreviewCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RecordPreviewCardComponent],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
      ],
    }),
  ],
} as Meta<RecordPreviewCardComponent>

export const Primary: StoryObj<RecordPreviewCardComponent> = {
  args: {
    record: DATASET_RECORDS[0],
    linkTarget: '_blank',
  },
}
