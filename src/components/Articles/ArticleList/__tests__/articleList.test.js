import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import ArticleList from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  it('should render correctly', () => {
    const component = shallow(<ArticleList />);
    expect(component).toMatchSnapshot();
  });
});
