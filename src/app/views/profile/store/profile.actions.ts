import { createAction, props } from '@ngrx/store';
import { Profile } from '../models/profile.models';

export const loadProfiles = createAction(
  '[Profile CallFrom Profile Component] Load Profiles',
  (user) => ({ user })
);

export const loadProfilesSuccess = createAction(
  '[Profile] Load Profiles Success',
  props<{ profile: Profile }>()
);

export const loadProfilesFailure = createAction(
  '[Profile] Load Profiles Failure',
  props<{ error: any }>()
);

/** seharusnya jadi 1 aja ga usa bikin action effect */
export const loadProfilesSuccessEffect = createAction(
  '[Profile effect] Load Profiles Success',
  props<{ profile: Profile }>()
);

export const loadProfilesFailureEffect = createAction(
  '[Profile effect] Load Profiles Failure',
  props<{ error: any }>()
);
