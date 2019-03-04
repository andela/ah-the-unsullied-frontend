import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { profile } from '../views/viewProfileView';

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

      bio: 'Bio updated',
      image: 'hssggsgs',

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

    wrapper = shallow(<profile {...props} />);
    wrapperInstance = wrapper.instance();
  });


  it('should render article view component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
