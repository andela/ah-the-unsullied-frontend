import { FOLLOWINGLIST } from './../../actions/profile/profileTypes';
import followingReducer from '../profile/followingReducer';

describe('following reducer', () => {
  const initialState = {
    following: []
  };

  const action = {
    type: FOLLOWINGLIST,
    payload: {
      username: 'nesh'
    }
  };

  const expectedState = {
    following: 
      {
        username: 'nesh'
      }
  };
  it('it should return the initial state', () => {
    expect(followingReducer(initialState, [])).toEqual(initialState);
  });
  it('it should handle a following action', () => {
    expect(followingReducer(initialState, action)).toEqual(expectedState);
  });
});
