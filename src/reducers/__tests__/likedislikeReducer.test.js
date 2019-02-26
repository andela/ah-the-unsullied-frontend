import likeReducer from '../LikeReducer';
import {
  LIKE_ARTICLE_SUCCESS,
  DISLIKE_ARTICLE_SUCCESS
} from '../../actions/actionTypes';

describe('LikeDislike Reducer', () => {
  it('should should like an article', () => {
    const state = {};

    const request = {
      type: LIKE_ARTICLE_SUCCESS,
      payload: {
        likes_dislikes_count: {
          likes: 1,
          dislikes: 0,
          liked: true,
          disliked: false
        }
      }
    };

    const expectedData = {
      likesDislikes: {
        likes_dislikes_count: {
          likes: 1,
          dislikes: 0,
          liked: true,
          disliked: false
        }
      }
    };
    expect(likeReducer(state, request)).toEqual(expectedData);
  });

  it('should should dislike an article', () => {
    const state = {};

    const request = {
      type: DISLIKE_ARTICLE_SUCCESS,
      payload: {
        likes_dislikes_count: {
          likes: 0,
          dislikes: 1,
          liked: false,
          disliked: true
        }
      }
    };

    const expectedData = {
      likesDislikes: {
        likes_dislikes_count: {
          likes: 0,
          dislikes: 1,
          liked: false,
          disliked: true
        }
      }
    };
    expect(likeReducer(state, request)).toEqual(expectedData);
  });
});
