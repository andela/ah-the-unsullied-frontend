import { getCurrentUser } from '../currentUser';

describe('Get current user', () => {
  it('Return null if current user is undefined', () => {
    expect(getCurrentUser()).toBe(null);
  });
});
