import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from '../index';


Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    registerUser: jest.fn()
  };
  const wrapper = shallow(<Nav {...props} />);

  return {
    props,
    wrapper
  };
}
describe('<Nav /> snapshot', () => {
  it('Component should match the snapshot', () => {
    const navComponent = shallow(<Nav />);
    expect(navComponent).toMatchSnapshot();
  });
});

describe('Nav elements tests', () => {
  it('renders the nav elements', () => {
    const { wrapper } = setup();
    expect(wrapper.find('form')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
    expect(wrapper.find('i')).toBeDefined();
    expect(wrapper.find('input')).toBeDefined();  
  });
});