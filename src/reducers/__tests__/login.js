import * as types from '../../actions/actionTypes';
import loginReducer from '../loginReducer';


describe('login reducer', () => {
    const initialState = {
        auth: {
          isAuthenticated: false,
          user: {},
          errors: {}
        },
        isAuthenticated: false,
        user: {},
        errors: {}
      };
    it('it should return the initial state', () => {
        expect(loginReducer(initialState,types.SET_CURRENT_USER)).toEqual(initialState);
    });
});