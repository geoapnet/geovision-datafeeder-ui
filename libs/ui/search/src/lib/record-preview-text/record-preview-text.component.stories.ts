import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'
import { RecordPreviewTextComponent } from './record-preview-text.component'
import { importProvidersFrom } from '@angular/core'
import { RecordPreviewTitleComponent } from '../record-preview-title/record-preview-title.component'
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { TranslateModule } from '@ngx-translate/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

export default {
  title: 'Search/RecordPreviewTextComponent',
  component: RecordPreviewTextComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
        RecordPreviewTextComponent,
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
      ],
    }),
  ],
} as Meta<RecordPreviewTextComponent>

export const Primary: StoryObj<RecordPreviewTitleComponent> = {
  args: {
    record: DATASET_RECORDS[0],
    linkTarget: '_blank',
  },
}
