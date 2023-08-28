import { Meta, moduleMetadata, StoryObj } from '@storybook/angular'
import { RecordPreviewListComponent } from './record-preview-list.component'
import { TranslateModule } from '@ngx-translate/core'
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

export default {
  title: 'Search/RecordPreviewListComponent',
  component: RecordPreviewListComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
        RecordPreviewListComponent,
      ],
    }),
  ],
} as Meta<RecordPreviewListComponent>

export const Primary: StoryObj<RecordPreviewListComponent> = {
  args: {
    record: DATASET_RECORDS[0],
    linkTarget: '_blank',
  },
}
