import { LoginSuccessAction, LogoutAction } from '../../pages/Login/actions';
import userReducer, { initialState } from '../reducer';
import { userFixture } from '../fixtures';

describe('userReducer', () => {
  it('should handle the login action correctly', () => {
    expect(userReducer(initialState, LoginSuccessAction(userFixture))).toEqual(
      userFixture
    );
  });
  it('should handle the logout action correctly', () => {
    expect(userReducer(userFixture, LogoutAction())).toEqual(initialState);
  });
});
