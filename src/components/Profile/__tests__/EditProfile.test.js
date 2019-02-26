import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { ViewProfile, mapStateToProps } from '../EditProfile';

Enzyme.configure({ adapter: new Adapter() });
describe('get profile', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      bio: 'a bio ',
      image: 'hshshs',
      username: 'nesh',

      auth: {
        isAuthenticated: true,
        user: {
          username: 'nesh'
        }
      },

      match: {
        params: {
          username: 'nesh'
        }
      },

      EditUserProfile: jest.fn()
    };

    state = {
      auth: {},
      profile: {},
      fetched: true
    };

    wrapper = shallow(<ViewProfile {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should mapStateToProps', () => {
    const props = mapStateToProps(state);
    expect(props.profile).toEqual(state.profile.profile);
  });

  it('should change the state when calling handLike', () => {
    const e = {
      preventDefault: jest.fn()
    };
    const username = 'nesh';
    const data = { bio: 'a bio ', image: 'hshshs' };
    wrapperInstance.handleSubmit(e);
    expect(props.EditUserProfile).toHaveBeenCalledWith(username, data);
  });

  it('should render article view component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
