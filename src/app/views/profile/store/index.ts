import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { Profile } from '../models/profile.models';
import {
  loadProfilesFailure,
  loadProfilesFailureEffect,
  loadProfilesSuccess,
  loadProfilesSuccessEffect,
} from './profile.actions';

export const profileStateFeatureKey = 'profileState';

// versi tanpa entyty
export interface ProfileState {
  profile: Profile;
  error: any;
}

export const initialState: ProfileState = {
  profile: undefined,
  error: undefined,
};

export const reducers = createReducer(
  initialState,
  on(loadProfilesSuccess, (state, action) => {
    return {
      profile: action.profile,
    };
  }),
  on(loadProfilesFailure, (state, action) => {
    return {
      profile: state.profile,
      error: action.error,
    };
  }),
  on(loadProfilesSuccessEffect, (state, action) => {
    return {
      profile: action.profile,
    };
  }),
  on(loadProfilesFailureEffect, (state, action) => {
    return {
      profile: state.profile,
      error: action.error,
    };
  })
);

export const selectProfileFeature = createFeatureSelector<ProfileState>(
  profileStateFeatureKey
);

export const selectProfile = createSelector(
  selectProfileFeature,
  (state: ProfileState) => state.profile
);

export const metaReducers: MetaReducer<ProfileState>[] = !environment.production
  ? []
  : [];
