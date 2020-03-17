import { ApplicationStateType } from '../types';
import { PagesState } from './types';

export const selectPages = (state: ApplicationStateType): PagesState =>
  state.pages;
