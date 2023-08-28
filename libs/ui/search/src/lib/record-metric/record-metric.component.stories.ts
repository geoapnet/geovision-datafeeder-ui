import { Meta, moduleMetadata, StoryObj } from '@storybook/angular'
import { RecordMetricComponent } from './record-metric.component'
import {
  TRANSLATE_DEFAULT_CONFIG,
  UtilI18nModule,
} from '@geonetwork-ui/util/i18n'
import { TranslateModule } from '@ngx-translate/core'

export default {
  title: 'Search/RecordMetricComponent',
  component: RecordMetricComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RecordMetricComponent,
        UtilI18nModule,
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
      ],
    }),
  ],
} as Meta<RecordMetricComponent>

export const Primary: StoryObj<RecordMetricComponent> = {
  args: {
    count: 42,
    label: 'a metric label',
    icon: '◔',
  },
}
