import { FOLLOWERS } from './../../actions/profile/profileTypes';
import followerReducer from '../profile/followerReducer';

describe('follower reducer', () => {
  const initialState = {
    followers: []
  };

  const action = {
    type: FOLLOWERS,

    payload: {
      username: 'nesh'
    }
  };

  const expectedState = {
    followers: 
      {
        username: 'nesh'
      }
  };
  it('it should return the initial state', () => {
    expect(followerReducer(initialState, [])).toEqual(initialState);
  });
  it('it should handle an action', () => {
    expect(followerReducer(initialState, action)).toEqual(expectedState);
  });
});
