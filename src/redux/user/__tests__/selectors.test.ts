import { applicationState } from '../../fixtures';
import { selectToken, selectUser } from '../selector';
import { userFixture } from '../fixtures';

describe('user selectors', () => {
  it('selectUser', () => {
    expect(selectUser(applicationState)).toEqual(userFixture);
  });

  it('selectToken', () => {
    expect(selectToken(applicationState)).toEqual(userFixture.token);
  });
});
