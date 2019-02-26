import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import React from 'react';

import  articleDetail  from './ArticleView';

Enzyme.configure({ adapter: new Adapter() });

describe('articleDetail', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
        user: {
          username: 'kwanj',
          email: 'kwanj@gmail.com'
        }
      },
      getArticles: jest.fn(() => {
        Promise.resolve();
      }),
      history: {
        push: jest.fn(() => {
          Promise.resolve();
        })
      },
      article: {
        article: {  
          article:{
          id: 6,
          author: {
            username: 'kwanj',
            image:
              'https://res.cloudinary.com/dadrqjrpw/image/upload/v1550732215/tzpffmzpmsy3lmijpauf.jpg',
            bio: null,
            following: null
          },
          body: '<p>sbsdbb</p>',
          title: 'how-to-become-a-god',
          description: 'First article from the frontens #theunsullied',
          rating: 0,
          tag_list: ['kwanj'],
          read_time: '1 min read',
          likes: 0,
          dislikes: 0,
          liked: false,
          disliked: false,
          slug: 'how-to-become-a-god-xd0ctx6n',
          created_at: '2019-02-28T10:04:42.687397Z',
          updated_at: '2019-02-28T10:15:29.020191Z',
          is_reported: false
        }
      }
    }
    };
    wrapper = shallow(<articleDetail {...props} />);
  });
  it('should render correctly', () =>{
    expect(wrapper).toMatchSnapshot()
  })

});
