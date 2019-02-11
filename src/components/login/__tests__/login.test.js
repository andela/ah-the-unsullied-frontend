import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import Login from '../index';


Enzyme.configure({ adapter: new Adapter() });


describe('Login', () => {
  it('should render correctly', () => {
    const component = shallow(<Login />);
    expect(component).toMatchSnapshot();
  });
});
