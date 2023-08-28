import { RouterService } from './router.service'
import { Type } from '@angular/core'
import { ROUTER_CONFIG } from './ROUTER_CONFIG'

export * from './constants'
export * from './state'
export * from './router.service'
export * from './container/search-router.container.directive'
export * from './state/router.effects'
export * from './SearchRouteReuseStrategy'
export { ROUTER_CONFIG } from './ROUTER_CONFIG'

export interface RouterConfigModel {
  searchStateId: string
  searchRouteComponent: Type<any>
  recordRouteComponent: Type<any>
}

export class DefaultRouterModule {
  constructor(private routerService: RouterService) {
    this.routerService.initRoutes()
  }
}
