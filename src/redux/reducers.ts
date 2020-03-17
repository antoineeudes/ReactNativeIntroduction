import { combineReducers, Reducer } from 'redux';
import { ApplicationStateType } from './types';
import { reducer as user } from './user';
import { reducer as pages } from './pages';

export const reducers: Reducer<ApplicationStateType> = combineReducers<
  ApplicationStateType
>({
  user,
  pages
});

export default reducers;
