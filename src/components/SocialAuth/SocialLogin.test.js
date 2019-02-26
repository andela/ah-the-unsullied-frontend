import React from 'react';
import {  MemoryRouter } from 'react-router-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SocialAuthClass, { mapDispatchToProps } from './SocialLogin';
import { FETCH_CALL, FETCH_FAILED } from '../../actions/SocialAuth/SocialAuthTypes';


Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const fakeStore = configureStore(middleware);

describe('<SocialAuthClass /> snapshot', () => {
  it('Component should match the snapshot', () => {
    const socialComponent = shallow(<SocialAuthClass debug />);
    expect(socialComponent).toMatchSnapshot();
  });
});

describe('social auth card', () => {
  const store = fakeStore({});
  const socialWrapper = mount(
    <Provider store={store}>
      <MemoryRouter>
        <SocialAuthClass />
      </MemoryRouter>
    </Provider>
  );

  it('should render all buttons correctly', () => {
    expect(socialWrapper.find('button').exists()).toBe(true);
    expect(socialWrapper.find('i').exists()).toBe(true);
  });
});

describe('Testing all the props', () => {
  const dispatch = jest.fn();
  const authData = {
    username: 'Allan Mogusu',
    email: 'allan@gmail.com',
    token: '121aAB12njnejcbbAabcAbcYTF2'
  };

  it('returns facebook data correctly', () => {
    mapDispatchToProps(dispatch).FacebookAuth(authData);
    expect(dispatch.mock.calls[0][0]).toEqual(authData);
  });

  it('returns google data correctly', () => {
    mapDispatchToProps(dispatch).GoogleAuth(authData);
    expect(dispatch.mock.calls[0][0]).toEqual(authData);
  });

  it('returns twitter data correctly', () => {
    mapDispatchToProps(dispatch).TwitterAuth(authData);
    expect(dispatch.mock.calls[0][0]).toEqual(authData);
  });

  it('Should return all user data fetched from api', () => {
    const expectedData = {
      email: 'allan@gmail.com',
      token: '121aAB12njnejcbbAabcAbcYTF2',
      username: 'Allan Mogusu'
    };
    mapDispatchToProps(dispatch).receivedUsers(authData);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedData);
  });

});

describe('test fetching true', () => {
  const dispatch = jest.fn();

  it('returns a fetching message when fetching', ()=>{
    const expectedData = {
      type: FETCH_CALL,
      payload: {
        fetching: true,
        message: 'fetching'
      }
    };
    mapDispatchToProps(dispatch).fetchingCall();
    expect(dispatch.mock.calls[0][0]).toEqual(expectedData)
  });
});

describe('test fetching false', () =>{
  const dispatch = jest.fn();

  it('returns a fetch failed error when fetch fails', () =>{
    const error = {
      'message': 'failed fetch'
    };
    const expectedData = {
      type: FETCH_FAILED,
      payload: {
        fetching: false,
        message: error
      }
    };
    mapDispatchToProps(dispatch).fetchFailed(error);
    expect(dispatch.mock.calls[0][0]).toEqual(expectedData);
  });
});
