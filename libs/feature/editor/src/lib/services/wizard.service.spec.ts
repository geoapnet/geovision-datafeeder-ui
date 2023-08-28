import { TestBed } from '@angular/core/testing'

import { WizardService } from './wizard.service'
import { TranslateModule } from '@ngx-translate/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import {
  AutocompleteComponent,
  ButtonComponent,
  CheckToggleComponent,
  ChipsInputComponent,
  CopyTextButtonComponent,
  DragAndDropFileInputComponent,
  DropdownMultiselectComponent,
  DropdownSelectorComponent,
  NavigationButtonComponent,
  StarToggleComponent,
  TextAreaComponent,
  TextInputComponent,
  ViewportIntersectorComponent,
} from '@geonetwork-ui/ui/inputs'

const localStorageMock = () => {
  let storage = {}
  return {
    getItem: (key) => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ''),
    removeItem: (key) => delete storage[key],
    clear: () => (storage = {}),
  }
}

describe('WizardService', () => {
  let service: WizardService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        AutocompleteComponent,
        ButtonComponent,
        CheckToggleComponent,
        ChipsInputComponent,
        CopyTextButtonComponent,
        DragAndDropFileInputComponent,
        DropdownSelectorComponent,
        DropdownMultiselectComponent,
        NavigationButtonComponent,
        StarToggleComponent,
        TextAreaComponent,
        TextInputComponent,
        ViewportIntersectorComponent,
        BrowserModule,
        HttpClientTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents()
    service = TestBed.inject(WizardService)
  })

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock() })

    window.localStorage.setItem(
      'datafeeder-state',
      '{"1":{"step":4,"values":[{"id":"title","value":"title"},{"id":"abstract","value":"dataset"},{"id":"tags","value":"[{\\"display\\":\\"Faeroe Islands\\",\\"value\\":\\"Faeroe Islands\\"}]"},{"id":"dropdown","value":"\\"25000\\""},{"id":"description","value":"description"}]},"10":{"step":4,"values":[{"id":"title","value":"title"},{"id":"abstract","value":"dataset"},{"id":"tags","value":"[{\\"display\\":\\"Davis Sea\\",\\"value\\":\\"Davis Sea\\"}]"},{"id":"dropdown","value":"\\"50000\\""},{"id":"description","value":"desctription"}]}}'
    )
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('initialize', () => {
    service.initialize('1', {
      configuration: [],
      storageKey: 'datafeeder-state',
    })

    expect(service.getWizardFieldData('title')).toEqual('title')
    expect(service.getWizardFieldData('abstract')).toEqual('dataset')
  })
})
