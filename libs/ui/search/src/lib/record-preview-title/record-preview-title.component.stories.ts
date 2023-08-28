import { Meta, moduleMetadata, StoryObj } from '@storybook/angular'
import { RecordPreviewTitleComponent } from './record-preview-title.component'
import { TranslateModule } from '@ngx-translate/core'
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

export default {
  title: 'Search/RecordPreviewTitleComponent',
  component: RecordPreviewTitleComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
        RecordPreviewTitleComponent,
      ],
    }),
  ],
} as Meta<RecordPreviewTitleComponent>

export const Primary: StoryObj<RecordPreviewTitleComponent> = {
  args: {
    record: DATASET_RECORDS[0],
    linkTarget: '_blank',
  },
}
