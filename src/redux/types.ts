import { UserState } from './user/types';
import { PagesState } from './pages/types';

export interface ApplicationStateType {
  user: UserState;
  pages: PagesState
}

export interface ApiMinimalResponseType {
  status: boolean;
  message: string;
}
