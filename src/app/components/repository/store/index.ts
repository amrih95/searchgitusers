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
import { Repository } from '../models/repository.models';
import {
  loadRepositorysFailureEffect,
  loadRepositorysSuccessEffect,
} from './repository.actions';

export const repositoryStateFeatureKey = 'repositoryState';

export interface RepositoryState {
  repos: Repository[];
  error: any;
}

export const initialState: RepositoryState = {
  repos: undefined,
  error: undefined,
};

export const reducers = createReducer(
  initialState,
  on(loadRepositorysSuccessEffect, (state, action) => {
    return {
      repos: action.repos,
    };
  }),
  on(loadRepositorysFailureEffect, (state, action) => {
    return {
      repos: state.repos,
      error: action.error,
    };
  })
);

// create selector
export const selectReposFeature = createFeatureSelector<RepositoryState>(
  repositoryStateFeatureKey
);
export const selectRepos = createSelector(
  selectReposFeature,
  (state: RepositoryState) => state.repos
);

export const metaReducers: MetaReducer<
  RepositoryState
>[] = !environment.production ? [] : [];
