import { ApplicationStateType, ApiMinimalResponseType } from './types';
import { pagesStateFixture } from './pages/fixtures';
import { userFixture } from './user/fixtures';

export const applicationState: ApplicationStateType = {
  user: userFixture,
  pages: pagesStateFixture
};

export const apiErrorResponse: ApiMinimalResponseType = {
  status: false,
  message: 'an error occured'
};
