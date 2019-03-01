import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import ArticleRating from '../RatingComponent';

Enzyme.configure({ adapter: new Adapter() });


describe('Rating component', () => {
  it('should render correctly', () => {
    const component = shallow(<ArticleRating/>);
    expect(component).toMatchSnapshot();
  });
});

describe('it renders props correctly', () => {
  const mockFunction = jest.fn();
  const component = shallow(<ArticleRating
    slug="article-slug"
    rating="5"
    postRating={mockFunction}
    getAverageRating={mockFunction}
  />
  );
  expect(component.instance().props.slug).toBe('article-slug');
  expect(component.instance().props.rating).toBe('5');
  expect(component.instance().props.postRating).toBe(mockFunction);
  expect(component.instance().props.getAverageRating).toBe(mockFunction);
});



