import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import jest from 'jest-mock';
import { FollowerListView, mapStateToProps } from '../FollowerListView';

Enzyme.configure({ adapter: new Adapter() });
describe('followwing ListView', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  let dispatch;
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
      Followers: {
        followers: []
      },

      match: {
        params: {
          username: 'nesh'
        }
      },

      list: [
        {
          bio: 'i have abio',
          username: 'nesh',
          image: 'hshhshs'
        },
        {
          bio: 'i have abio',
          username: 'nesh',
          image: 'hshhshs'
        }
      ],

      followersList: jest.fn(() => {
        Promise.resolve();
      })
    };

    state = {
      auth: {},
      Followers: {
        followers: [{},{}]
      }
    };
    wrapper = shallow(<FollowerListView {...props} />);
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
