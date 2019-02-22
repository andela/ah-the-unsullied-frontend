import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import CreateArticle from '..';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateArticle', () => {
  it('should render correctly', () => {
    const component = shallow(<CreateArticle />);
    expect(component).toMatchSnapshot();
  });
});
