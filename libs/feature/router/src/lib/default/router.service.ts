import { Inject, Injectable } from '@angular/core'

import { ROUTER_ROUTE_DATASET, ROUTER_ROUTE_SEARCH, RouterConfigModel } from '.'
import { Router, Routes } from '@angular/router'
import { ROUTER_CONFIG } from './ROUTER_CONFIG'

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(
    @Inject(ROUTER_CONFIG) private routerConfig: RouterConfigModel,
    private router: Router
  ) {}

  initRoutes() {
    this.router.resetConfig(this.buildRoutes())
  }

  buildRoutes(): Routes {
    return [
      { path: '', redirectTo: `/${ROUTER_ROUTE_SEARCH}`, pathMatch: 'full' },
      {
        path: ROUTER_ROUTE_SEARCH,
        data: {
          shouldDetach: true,
        },
        component: this.routerConfig.searchRouteComponent,
      },
      {
        path: `${ROUTER_ROUTE_DATASET}/:metadataUuid`,
        component: this.routerConfig.recordRouteComponent,
      },
    ]
  }

  getSearchRoute(): string {
    return ROUTER_ROUTE_SEARCH
  }
}
