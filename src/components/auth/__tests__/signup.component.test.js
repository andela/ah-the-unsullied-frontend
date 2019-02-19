import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup from '../SignUp';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    registerUser: jest.fn()
  };
  const wrapper = shallow(<Signup {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Signup elements tests', () => {
  it('renders a the signup form elements', () => {
    const { wrapper } = setup();
    expect(wrapper.find('form')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
    expect(wrapper.find('input')).toBeDefined();
  });
});
