import { combineReducers, Reducer } from 'redux';
import { PagesState } from './types';
import { reducer as login } from './Login';

export const pagesReducers: Reducer<PagesState> = combineReducers<PagesState>({
  login
});

export default pagesReducers;
