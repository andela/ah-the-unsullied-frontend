import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import articleView from '../views/ArticleView';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    registerUser: jest.fn()
  };
  const wrapper = shallow(<articleView {...props} />);

  return {
    props,
    wrapper
  };
}

describe('Signup elements tests', () => {
  it('renders a the signup form elements', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
    expect(wrapper.find('input')).toBeDefined();
  });

  it('should render correctly', () => {
    const component = shallow(<articleView />);
    expect(component).toMatchSnapshot();
  });
});
