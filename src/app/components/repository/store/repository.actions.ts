import { createAction, props } from '@ngrx/store';
import { Repository } from '../models/repository.models';

export const loadRepositorys = createAction(
  '[Repository] Load Repositorys',
  (user, currentPage, perPageSize ) => ({ user, currentPage, perPageSize })
);

export const loadRepositorysSuccessEffect = createAction(
  '[Repository Effect] Load Repositorys Success',
  props<{ repos: Repository[] }>()
);

export const loadRepositorysFailureEffect = createAction(
  '[Repository Effect] Load Repositorys Failure',
  props<{ error: any }>()
);
