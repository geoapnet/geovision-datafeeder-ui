// export * from './lib/feature-search.module'
import { InjectionToken } from '@angular/core'
import { Geometry } from 'geojson'

export * from './lib/facets/facets.module'
export * from './lib/favorites/favorite-star/favorite-star.component'
export * from './lib/filter-dropdown/filter-dropdown.component'
export * from './lib/fuzzy-search/fuzzy-search.component'
export * from './lib/records-metrics/records-metrics.component'
export * from './lib/results-hits-number/results-hits.container.component'
export * from './lib/results-list/results-list.container.component'
export * from './lib/results-layout/results-layout.component'
export * from './lib/sort-by/sort-by.component'
// STATE
export * from './lib/state/actions'
export * from './lib/state/selectors'
export * from './lib/state/search.facade'
export * from './lib/state/effects'
export * from './lib/state/reducer'
export * from './lib/state/container/search-state.container.directive'
// UTIL
// export * from './lib/utils/mapper'
export * from './lib/utils/service/search.service'
export * from './lib/utils/service/fields.service'
export * from './lib/results-list/results-list.container.component'
export * from './lib/filter-dropdown/filter-dropdown.component'
export * from './lib/constants'
export * from './lib/fuzzy-search/fuzzy-search.component'

// this geometry will be used to filter & boost results accordingly
export const FILTER_GEOMETRY = new InjectionToken<Promise<Geometry>>(
  'filter-geometry'
)

// expects the replacement key ${uuid}
export const RECORD_URL_TOKEN = new InjectionToken<string>('record-url-token')
