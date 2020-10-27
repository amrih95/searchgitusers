import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RepositoryService } from '../services/repository.service';
import * as fromAction from '../../repository/store/repository.actions';
import { of } from 'rxjs';

@Injectable()
export class RepositoryEffects {
  // loadRepos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fromAction.loadRepositorys),
  //     mergeMap(() =>
  //       this.repoService.getUserRepositories('octocat').pipe(
  //         map((res) => fromAction.loadRepositorysSuccessEffect({ repos: res })),
  //         catchError((err) =>
  //           of(fromAction.loadRepositorysFailureEffect({ error: err }))
  //         )
  //       )
  //     )
  //   )
  // );

  loadReposPerPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAction.loadRepositorys),
      mergeMap(({ user, currentPage, perPageSize }) => {
        return this.repoService
          .getUserRepositories(user, perPageSize, currentPage)
          .pipe(
            map((res) =>
              fromAction.loadRepositorysSuccessEffect({ repos: res })
            ),
            catchError((err) =>
              of(fromAction.loadRepositorysFailureEffect({ error: err }))
            )
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private repoService: RepositoryService
  ) {}
}
