import { createSelector } from 'reselect';
import { ApplicationStateType } from '../types';
import { UserState } from './types';

export const selectUser = (state: ApplicationStateType): UserState =>
  state.user;

export const selectToken: (
  state: ApplicationStateType
) => string | null = createSelector(
  [selectUser],
  (user: UserState) => user.token
);
