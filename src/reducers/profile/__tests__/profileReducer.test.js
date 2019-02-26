import profileReducer from '../profileReducer';
import {
  VIEW_PROFILE,
  EDIT_PROFILE,
  GET_ERRORS,
  FOLLOWING
} from '../../../actions/ArticleActions/types';

const initialState = {
  profile: {}
};

describe('profile reducer', () => {
  it('passed with VIEW_PROFILE', () => {
    const action = {
      type: VIEW_PROFILE
    };
    const newState = profileReducer(initialState, action);
    expect(newState.success).toEqual(action.payload);
  });

  it('passed with EDIT_PROFILE', () => {
    const action = {
      type: EDIT_PROFILE
    };
    const newState = profileReducer(initialState, action);
    expect(newState.success).toEqual(action.payload);
  });

  it('passed with GET_ERRORS', () => {
    const action = {
      type: GET_ERRORS
    };
    const newState = profileReducer(initialState, action);
    expect(newState.success).toEqual(action.payload);
  });

  it('passed with FOLLOW', () => {
    const action = {
      type: FOLLOWING,
    };
    const newState = profileReducer(initialState, action);
    expect(newState.success).toEqual(action.payload);
  });
});
