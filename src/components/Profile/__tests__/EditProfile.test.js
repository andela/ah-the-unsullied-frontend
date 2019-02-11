import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditProfile from '../EditProfile.js';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    registerUser: jest.fn()
  };
  const wrapper = shallow(<EditProfile {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Edit Profile tests', () => {
  it('renders the edit form', () => {
    const { wrapper } = setup();
  });
});
