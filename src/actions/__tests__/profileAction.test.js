import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { VIEW_PROFILE, EDIT_PROFILE } from '../profile/profileTypes';
import * as testActions from '../profile/profileActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Get profile Action ', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('send fetch follow action', () => {
    const MockHttpResponse = {
      status: 200,
      data: { username: 'nesh', bio: 'my bio', image: 'myimage' }
    };
    const expectedActions = [
      {
        type: VIEW_PROFILE
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

    store.dispatch(testActions.getUserProfile('nesh')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('Edit profile Action ', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('send fetch follow action', () => {
    const MockHttpResponse = {
      status: 201,
      data: { username: 'nesh', bio: 'my bio', image: 'myimage' }
    };
    const expectedActions = [
      {
        type: EDIT_PROFILE
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

    store.dispatch(testActions.EditUserProfile('nesh')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
