import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import * as fromAction from '../../profile/store/profile.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.loadProfiles),
      mergeMap(({ user }) =>
        this.profileService.getProfile(user).pipe(
          map((res) => fromAction.loadProfilesSuccessEffect({ profile: res })),
          catchError((err) => {
            this.router.navigate(['**']);
            return of(fromAction.loadProfilesFailureEffect({ error: err }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private router: Router
  ) {}
}
