import { modelizeAccount } from '../modelize';
import { userFixture } from '../../../user/fixtures';
import { apiUserFixture } from '../fixtures';

describe('modelizeAccount', () => {
  it('should modelize accounts', () => {
    expect(modelizeAccount(apiUserFixture)).toEqual(userFixture);
  });
});
