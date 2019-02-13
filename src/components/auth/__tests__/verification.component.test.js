import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Verification from '../Verification';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    verifyUser: jest.fn()
  };
  const wrapper = shallow(<Verification {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Verification elements tests', () => {
  it('renders a the verification elements', () => {
    const { wrapper } = setup();
    expect(wrapper.find('card')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
  });
});
