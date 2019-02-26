import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount, shallow } from 'enzyme';
import { ArticleRating, mapStateToProps } from '../RatingComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Rating component', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;

  beforeEach(() => {
    props = {
      slug: {
        slug: 'article-slug'
      },
      rating: {
        rating: 5
      },
      postRating: jest.fn(() => {
        Promise.resolve();
      }),
      getAverageRating: jest.fn(() => {
        Promise.resolve();
      }),
      auth: {
        isAuthenticated: true,
        user: {
          username: 'allan'
        }
      },
      article: {
        article: {
          article: {
            author: {
              username: 'nesh'
            }
          }
        }
      }
    };
    state = {
      articlereducer: {
        article: {}
      },
      auth: {
        isAuthenticated: true,
        user: {
          username: 'allan'
        }
      },
      rating: {
        error: 'a problem here'
      }
    };
    wrapper = shallow(<ArticleRating {...props} />);

    wrapperInstance = wrapper.instance();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('onClickHandler', () => {
    wrapperInstance.onClickHandler(5);
    expect(props.postRating).toBeCalledWith(
      { rating: 5 },
      { slug: 'article-slug' }
    );
  });

  it('componentDidMount', () => {
    const spy = jest.spyOn(ArticleRating.prototype, 'componentDidMount');
    mount(<ArticleRating {...props} />);
    expect(spy).toHaveBeenCalled();
    expect(props.getAverageRating).toBeCalledWith({ slug: 'article-slug' });
  });

  it('mapStateToProps', () => {
    const propsState = mapStateToProps(state);
    expect(propsState.article).toEqual(state.articlereducer);
    expect(propsState.auth).toEqual(state.auth);
    expect(propsState.ratingError).toEqual(state.rating);
  });
});
