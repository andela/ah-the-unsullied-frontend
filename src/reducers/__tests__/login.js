import * as types from '../../actions/actionTypes';
import loginReducer from '../login';


describe('login reducer', () => {
    const initialState = {
        isAuthenticated: false,
        user: {},
        errors: {}
      };
    it('it should return the initial state', () => {
        expect(loginReducer(initialState,types.SET_CURRENT_USER)).toEqual(initialState);
    });
});
