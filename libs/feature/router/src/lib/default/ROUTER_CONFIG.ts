import { InjectionToken } from '@angular/core'
import { RouterConfigModel } from './index'

export const ROUTER_CONFIG = new InjectionToken<RouterConfigModel>(
  'router.config'
)
