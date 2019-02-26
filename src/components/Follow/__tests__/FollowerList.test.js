import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { FollowersList, mapStateToProps } from '../FollowersList';

Enzyme.configure({ adapter: new Adapter() });
describe('follow button', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      bio: 'i have abio',
      username: 'nesh',
      image: 'hshhshs',

      auth: {
        isAuthenticated: true,
        user: {
          username: 'nesh'
        }
      },
      Followers:{
        followers:{}
      },
      list:[],

      followersList: jest.fn(() => {
        Promise.resolve();
      })
    };

    state = {
      auth: {},
      Followers: { }
    };
    wrapper = shallow(
      <FollowersList {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the follow button', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('mapStateToProps', () => {
    const propsState = mapStateToProps(state);
    expect(propsState.auth).toEqual(state.auth);

  });
});
