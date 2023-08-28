import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'
import { RecordPreviewFeedComponent } from './record-preview-feed.component'
import { importProvidersFrom } from '@angular/core'
import { action } from '@storybook/addon-actions'
import { HttpClientModule } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core'
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DATASET_RECORDS } from '@geonetwork-ui/common/fixtures'

export default {
  title: 'Search/RecordPreviewFeedComponent',
  component: RecordPreviewFeedComponent,
  decorators: [
    moduleMetadata({
      imports: [
        TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG),
        RecordPreviewFeedComponent,
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule, BrowserAnimationsModule),
      ],
    }),
  ],
} as Meta<RecordPreviewFeedComponent>

type RecordPreviewFeedTemplate = RecordPreviewFeedComponent & {
  favoriteTemplateString: string
}

export const Primary: StoryObj<RecordPreviewFeedTemplate> = {
  args: {
    record: DATASET_RECORDS[0],
    linkTarget: '_blank',
    favoriteTemplateString: `<a href title="Mark '{{record.title}}' as favorite">
    1234 <mat-icon class="align-middle">star</mat-icon>
  </a>`,
  },
  render: (args) => ({
    props: { ...args, mdSelect: action('mdSelect') },
    template: `<gn-ui-record-preview-feed
      [record]='record'
      [linkTarget]='linkTarget'
      (mdSelect)='mdSelect'
      [favoriteTemplate]='favorite'>
    </gn-ui-record-preview-feed>
    <ng-template #favorite let-record>${args.favoriteTemplateString}</ng-template>`,
  }),
}
