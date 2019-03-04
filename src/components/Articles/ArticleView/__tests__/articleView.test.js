import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { articleView } from '../views/ArticleView';
import { mapStateToProps } from '../ArticleDetail';

Enzyme.configure({ adapter: new Adapter() });
describe('single article', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
        user: {
          username: 'nesh'
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

      getArticle: jest.fn(() => {
        Promise.resolve();
      }), 
      ownerUpdate: jest.fn()
    };

    state = {
      auth: {},
      articlereducer: {
        article: {
          article: {}
        }
      }
    };

    wrapper = shallow(<articleView {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render article view component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
