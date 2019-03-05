import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import jest from 'jest-mock';
import { ArticleList, mapStateToProps } from '../index';

Enzyme.configure({ adapter: new Adapter() });
describe('article list view', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  let dispatch;
  beforeEach(() => {
    props = {
      articles: {
        articles: {
          resuts: [
            {
              title: 'my article',
              description: 'some stuff',
              slug: 'my-article',
              body: 'gsgsgsg',
              dislikes: 1,
              likes: 2,
              liked: false,
              displiked: false,
              is_reported: false,
              created_at: '01-01-2019',
              author: {
                bio: 'i have abio',
                username: 'nesh',
                image: 'hshhshs'
              }
            },

            {
              title: 'my article',
              description: 'some stuff',
              slug: 'my-article',
              body: 'gsgsgsg',
              dislikes: 1,
              likes: 2,
              liked: false,
              displiked: false,
              is_reported: false,
              created_at: '01-01-2019',
              author: {
                bio: 'i have abio',
                username: 'nesh',
                image: 'hshhshs'
              }
            }
          ],
          count: 12,
          pages: { next_page: {}, previous_page: {} }
        }
      },

      article: {
        title: 'my article',
        description: 'some stuff',
        slug: 'my-article',
        body: 'gsgsgsg',
        dislikes: 1,
        likes: 2,
        liked: false,
        displiked: false,
        is_reported: false,
        created_at: '01-01-2019',
        author: {
          bio: 'i have abio',
          username: 'nesh',
          image: 'hshhshs'
        }
      },

      auth: {
        isAuthenticated: true,
        user: {
          username: 'nesh'
        }
      },

      match: {
        params: {
          slug: 'my article'
        }
      },

      getArticles: jest.fn(() => {
        Promise.resolve();
      }),
      articleCard: jest.fn(),
      pageNumber: 2
    };

    state = {
      auth: {},
      articles: {
        article: {
          count: 24,
          pages: { next_page: {}, previous_page: {} },
          results: []
        }
      },
      loaded:true, 
      activePage:{
        pageNumber: 2
      }

    };
    wrapper = shallow(<ArticleList {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render article list', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change on click', () => {

    wrapperInstance.handlePageChange();
    wrapperInstance.setState(state)
    expect(props.getArticles).toHaveBeenCalledWith();
  });

  it('mapStateToProps', () => {
    const propsState = mapStateToProps(state);
    expect(propsState.articles).toEqual(state.articles.results);
  });
});
