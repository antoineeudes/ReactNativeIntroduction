import { createSelector } from 'reselect';
import { selectPages } from '../selector'
import { ApplicationStateType } from '../../types';
import { LoginPageState } from './types';
import { PagesState } from '../types';

export const selectLoginPage: (
  state: ApplicationStateType
) => LoginPageState = createSelector(
  [selectPages],
  (pages: PagesState) => pages.login
);

export const selectLoginIsLoading: (
  state: ApplicationStateType
) => boolean = createSelector(
  [selectLoginPage],
  (loginPageState: LoginPageState) => loginPageState.isLoading
);

export const selectLoginError: (
  state: ApplicationStateType
) => string | null = createSelector(
  [selectLoginPage],
  (loginPageState: LoginPageState) => loginPageState.errorMessage
);