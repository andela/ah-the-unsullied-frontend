import * as types from '../../actions/actionTypes';
import errorReducer from '../errorReducer';

describe('error reducer', () => {
  const initialState = {};
  const action = {
    type: types.GET_ERRORS,
    payload: 'error'
  };
  it('it should return the initial state', () => {
    expect(errorReducer(initialState, types.GET_ERRORS)).toEqual(initialState);
  });
  it('it should return the payload', () => {});
  expect(errorReducer(initialState, action)).toEqual(action.payload);
});
