import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mapStateToProps, BookmarkArticle } from '../BookmarkArticle';
Enzyme.configure({ adapter: new Adapter() });
describe('BookmarkArticle', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  beforeEach(() => {
    props = {
      allbookmarks: {},
      article: {
        article: {
          article: {
            slug: 'mara-pap'
          }
        }
      },
      bookmark: {},
      getBookmarkArticles: jest.fn(() => {
        Promise.resolve();
      }),
      bookmarkArticle: jest.fn(slug => {
        Promise.resolve();
      })
    };
    wrapper = shallow(<BookmarkArticle {...props} />);
    wrapperInstance = wrapper.instance();
  });
  it('should render the bookmark icon component', () => {
    const wrapper = shallow(<BookmarkArticle {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should change the state when calling onChange handler', () => {
    const slug = 'mara-pap';
    wrapperInstance.handleBookmark();
    expect(props.bookmarkArticle).toHaveBeenCalledWith(slug);
  });
  it('should change the state when changing props', () => {
    wrapper.setProps({
      bookmark: 'You have successfully bookmarked this article'
    });
    expect(wrapperInstance.state.bookmarked).toEqual('#00acee');
  });
  it('should change the state when changing props', () => {
    wrapper.setProps({
      bookmark: 'You have successfully removed this article from your bookmarks'
    });
    expect(wrapperInstance.state.bookmarked).toEqual('#cfcfd1');
  });
});
describe('The mapStateToProps', () => {
  const state = {
    bookmarkReducer: {
      bookmark: {}
    },
    allbookmarks: {
      article: undefined,
      bookmark: undefined,
      allbookmarks: undefined
    }
  };
  const props = mapStateToProps(state);
  expect(props).toEqual(state.allbookmarks);
});
