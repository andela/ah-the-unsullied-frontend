import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { Profile, mapStateToProps } from '../Profile';

Enzyme.configure({ adapter: new Adapter() });
describe('get profile', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
        user: {
          username: 'nesh'
        }
      },

      profile: {
        profile: {}
      },
      match: {
        params: {
          username: 'nesh'
        }
      },

      getUserProfile: async () => {
        await jest.fn();
      }
    };

    state = {
      auth: {},
      profile: {},
      fetched: true
    };

    wrapper = shallow(<Profile {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should mapStateToProps', () => {
    const props = mapStateToProps(state);
    expect(props.profile).toEqual(state.profile.profile);
  });

  it('should render article view component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
