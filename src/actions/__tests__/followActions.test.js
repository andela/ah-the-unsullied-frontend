import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../../actions/profile/followActions';
import * as types from '../../actions/profile/profileTypes';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Follow Action ', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });
    it('send fetch follow action', () => {
      const MockHttpResponse = {
        status: 201,
        data: { 'username':'nesh' }
      };
      const expectedActions = [
        {
          type: types.FOLLOWING
        }
      ];
      const store = mockStore();
      moxios.wait(() => {
        const request = moxios.request.mostRecent();
        return request.resolve({
          status: 201,
          response: MockHttpResponse
        });
      });
  
      store.dispatch(actions.follow('nesh')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('Following List ', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });
    it('send fetch follow action', () => {
      const MockHttpResponse = {
        status: 200,
        data: { 'username':'nesh' }
      };
      const expectedActions = [
        {
          type: types.FOLLOWINGLIST
        }
      ];
      const store = mockStore();
      moxios.wait(() => {
        const request = moxios.request.mostRecent();
        return request.resolve({
          status: 200,
          response: MockHttpResponse
        });
      });
  
      store.dispatch(actions.followingList('nesh')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

  describe('FollowersList ', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
    });
    it('send fetch following action', () => {
      const MockHttpResponse = {
        status: 200,
        data: { 'username':'nesh' }
      };
      const expectedActions = [
        {
          type: types.FOLLOWERS
        }
      ];
      const store = mockStore();
      moxios.wait(() => {
        const request = moxios.request.mostRecent();
        return request.resolve({
          status: 200,
          response: MockHttpResponse
        });
      });
  
      store.dispatch(actions.followersList('nesh')).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });

