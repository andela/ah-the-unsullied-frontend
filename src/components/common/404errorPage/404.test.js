import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import ErrorPage404 from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('ErrorPage404', () => {
  it('should render correctly', () => {
    const component = shallow(<ErrorPage404 />);
    expect(component).toMatchSnapshot();
  });
});
