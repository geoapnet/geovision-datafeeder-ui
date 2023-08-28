import { HttpClientModule } from '@angular/common/http'
import { TranslateModule } from '@ngx-translate/core'
import { CHART_TYPE_VALUES } from '@geonetwork-ui/common/domain/dataviz-configuration.model'
import {
  applicationConfig,
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular'
import { TRANSLATE_DEFAULT_CONFIG } from '@geonetwork-ui/util/i18n'
import { ChartComponent } from './chart.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { importProvidersFrom } from '@angular/core'

const meta: Meta<ChartComponent> = {
  title: 'Dataviz/ChartComponent',
  component: ChartComponent,
  decorators: [
    moduleMetadata({
      imports: [TranslateModule.forRoot(TRANSLATE_DEFAULT_CONFIG)],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(HttpClientModule),
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="max-width: 700px">${story}</div>`
    ),
  ],
  argTypes: {
    type: { control: { type: 'select', options: CHART_TYPE_VALUES } },
  },
}

export default meta

const SAMPLE_DATA = [
  {
    id: '0001',
    firstName: 'John',
    lastName: 'Lennon',
    discsSold: 10,
    age: 65,
  },
  {
    id: '0002',
    firstName: 'Ozzy',
    lastName: 'Osbourne',
    discsSold: 8,
    age: 45,
  },
  {
    id: '0003',
    firstName: 'Claude',
    lastName: 'François',
    discsSold: 5,
    age: 72,
  },
  {
    id: '0004',
    firstName: 'Michael',
    lastName: 'Jackson',
    discsSold: 15,
    age: 48,
  },
]
const options = ['not defined'].concat(Object.keys(SAMPLE_DATA[0]))

export const Primary: StoryObj<ChartComponent> = {
  args: {
    data: SAMPLE_DATA,
    labelProperty: 'firstName',
    valueProperty: 'discsSold',
    secondaryValueProperty: '',
    type: 'bar',
  },
  argTypes: {
    labelProperty: { control: { type: 'select', options } },
    valueProperty: { control: { type: 'select', options } },
    secondaryValueProperty: {
      control: { type: 'select', options },
    },
  },
}
