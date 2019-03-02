import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { LikeDislike, mapStateToProps } from '../index.js';

Enzyme.configure({ adapter: new Adapter() });
describe('LikeDislike', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      likesDislikes: {},
      changelikesDislikes: {
        likes: 0,
        dislikes: 4
      },
      article: {
        article: {
          article: {
            slug: 'test'
          }
        }
      },
      likeArticle: jest.fn(slug => {
        Promise.resolve();
      }),
      dislikeArticle: jest.fn(slug => {
        Promise.resolve();
      })
    };

    state = {
      articlereducer: {
        article: {}
      },
      likesDislikes: {}
    };
    wrapper = shallow(<LikeDislike {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the like and dislike button', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state when calling handLike', () => {
    const slug = 'test';
    wrapperInstance.handleLike();
    expect(props.likeArticle).toHaveBeenCalledWith(slug);
  });

  it('should change the state when calling handdisLike', () => {
    const slug = 'test';
    wrapperInstance.handledisLike();
    expect(props.dislikeArticle).toHaveBeenCalledWith(slug);
  });

  it('mapStateToProps', () => {
    const propsState = mapStateToProps(state);
    expect(propsState.article).toEqual(state.articlereducer);
  });

  it('Changes color When liked', () => {
    wrapper.setProps({
      likesDislikes: {
        likesDislikes: { likes: 1, dislikes: 0, liked: true, disliked: false }
      }
    });
    expect(wrapperInstance.state.likestyle).toEqual('#35A7FF');
  });

  it('Will change', () => {
    wrapper.setProps({
      likesDislikes: {
        likesDislikes: { likes: 0, dislikes: 1, liked: false, disliked: true }
      }
    });
    expect(wrapperInstance.state.dislikestyle).toEqual('#35A7FF');
  });
});
