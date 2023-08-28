import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'
import { DEFAULT_RESULTS_LAYOUT_CONFIG } from './results-layout.config'
import { ResultsListComponent } from './results-list.component'
import {
  TRANSLATE_DEFAULT_CONFIG,
  UtilI18nModule,
} from '@geonetwork-ui/util/i18n'
import { TranslateModule } from '@ngx-translate/core'
import { importProvidersFrom } from '@angular/core'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

export default {
  title: 'Search/ResultsListComponent',
  component: ResultsListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        ResultsListComponent,
        UtilI18nModule,
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
      ],
    }),
    applicationConfig({
      providers: [importProvidersFrom(SafePipe, ImageFallbackDirective)],
    }),
  ],
} as Meta<ResultsListComponent>

type ResultsListComponentWithKey = ResultsListComponent & {
  layoutConfigKey: string
}

export const Primary: StoryObj<ResultsListComponentWithKey> = {
  args: {
    records: DATASET_RECORDS,
    layoutConfigKey: 'CARD',
  },
  argTypes: {
    layoutConfigKey: {
      control: 'radio',
      options: Object.keys(DEFAULT_RESULTS_LAYOUT_CONFIG),
    },
  },
  render: (args) => ({
    props: {
      ...args,
      layoutConfig: DEFAULT_RESULTS_LAYOUT_CONFIG[args.layoutConfigKey],
      recordUrlGetter: () => '',
    },
  }),
}
