import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './views/repository/repository.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import * as fromRepositoryState from './store';
import { EffectsModule } from '@ngrx/effects';
import { RepositoryEffects } from './store/repository.effects';

@NgModule({
  declarations: [RepositoryComponent],
  imports: [CommonModule, NgbModule, StoreModule.forFeature(fromRepositoryState.repositoryStateFeatureKey, fromRepositoryState.reducers, { metaReducers: fromRepositoryState.metaReducers }), EffectsModule.forFeature([RepositoryEffects])],
  exports: [RepositoryComponent],
})
export class RepositoryModule {}
