import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from '../Profile';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    registerUser: jest.fn()
  };
  const wrapper = shallow(<Profile {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<Profile /> snapshot', () => {
  it('Component should match the snapshot', () => {
    const profileComponent = shallow(<Profile/>);
    expect(profileComponent).toMatchSnapshot();
  });
});

describe('Edit Profile tests', () => {
  it('renders the edit form', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img')).toBeDefined();
    expect(wrapper.find('image')).toBeDefined();
  });
});
