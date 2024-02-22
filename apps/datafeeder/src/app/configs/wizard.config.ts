import { marker } from '@biesbjerg/ngx-translate-extract-marker'
import {
  WizardFieldModel,
  WizardFieldType,
} from '@geonetwork-ui/feature/editor'
import SETTINGS from '../../settings'

export const DEFAULT_CHIPS_ITEMS_URL = (q: string): string =>
  SETTINGS.thesaurusUrl.replace('${q}', q)

export const STORAGE_KEY = 'datafeeder-state'

marker('datafeeder.form.title')
marker('datafeeder.form.abstract')
marker('datafeeder.form.tags')
marker('datafeeder.form.datepicker')
marker('datafeeder.form.description')
marker('datafeeder.form.dropdown')

export const DEFAULT_WIZARD_CONFIGURATION: WizardFieldModel[][] = [
  [
    {
      id: 'title',
      label: 'datafeeder.form.title',
      icon: 'title',
      type: WizardFieldType.TEXT,
      required: true,
    },
    {
      id: 'abstract',
      label: 'datafeeder.form.abstract',
      icon: 'subtitles',
      type: WizardFieldType.TEXT_AREA,
      required: true,
    },
  ],
  [
    {
      id: 'tags',
      label: 'datafeeder.form.tags',
      icon: 'bookmark',
      type: WizardFieldType.CHIPS,
      options: {
        url: DEFAULT_CHIPS_ITEMS_URL,
        loadOnce: true,
      },
      required: true,
    },
  ],
  [
    {
      id: 'datepicker',
      label: 'datafeeder.form.datepicker',
      icon: 'event_available',
      type: WizardFieldType.DATA_PICKER,
    },
    {
      id: 'dropdown',
      label: 'datafeeder.form.dropdown',
      icon: 'open_in_full',
      type: WizardFieldType.DROPDOWN,
      options: SETTINGS.scales,
    },
  ],
  [
    {
      id: 'description',
      label: 'datafeeder.form.description',
      icon: 'rebase_edit',
      type: WizardFieldType.TEXT_AREA,
      required: true,
    },
    {
      id: 'license',
      label: 'datafeeder.form.description',
      icon: 'public',
      type: WizardFieldType.DROPDOWN,
      options: SETTINGS.licenses,
      required: true,
    },
  ],
  [],
]

export const config = {
  storageKey: STORAGE_KEY,
  configuration: DEFAULT_WIZARD_CONFIGURATION,
}
