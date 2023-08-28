import { NgModule } from '@angular/core'
import { MD_VIEW_FEATURE_STATE_KEY, reducer } from './state/mdview.reducer'
import { MdViewEffects } from './state/mdview.effects'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { MdViewFacade } from './state'

@NgModule({
  imports: [
    StoreModule.forFeature(MD_VIEW_FEATURE_STATE_KEY, reducer),
    EffectsModule.forFeature([MdViewEffects]),
  ],
  providers: [MdViewFacade],
})
export class FeatureRecordModule {}
