import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './views/profile/profile.component';
import { DetailProfileComponent } from './views/detail-profile/detail-profile.component';
import { StoreModule } from '@ngrx/store';
import * as fromProfileState from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './store/profile.effects';
import { RepositoryModule } from 'src/app/components/repository/repository.module';
@NgModule({
  declarations: [ProfileComponent, DetailProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RepositoryModule,
    StoreModule.forFeature(
      fromProfileState.profileStateFeatureKey,
      fromProfileState.reducers,
      { metaReducers: fromProfileState.metaReducers }
    ),
    EffectsModule.forFeature([ProfileEffects]),
  ],
})
export class ProfileModule {}
