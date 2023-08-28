import { InjectionToken } from '@angular/core'

export * from './lib/services'
export * from './lib/utils/'
export * from './lib/links'
export * from './lib/image-fallback.directive'
export * from './lib/pipes/SafePipe'

export type OrganizationsStrategy = 'metadata' | 'groups'

export const ORGANIZATIONS_STRATEGY = new InjectionToken<OrganizationsStrategy>(
  'organizations-strategy',
  {
    factory: () => 'metadata',
  }
)
