import ratingReducer from '../RatingsReducer';
import * as types from '../../../actions/Rating/actionTypes';

describe('rating reducer', () =>{
  const initialState = {
    articleRating: {},
    ratingError: {},
    ratingGiven: {}
  };

  it('should return the initial state', ()=> {
    expect(
      ratingReducer(undefined, initialState)).toEqual(initialState)
  });

  it('should handle post rating success', () =>{
    const action = {
      type: types.POST_RATING,
      payload: {
        'rating': 3
      }
    };
    const expectedState = {
      articleRating: {},
      ratingGiven: {
        'rating': 3
      },
      ratingError: {}
    };
    expect(ratingReducer(initialState, action)).toEqual(expectedState)
  });

  it('should handle getAverageRating ', () =>{
    const action = {
      type: types.VIEW_AVERAGE_RATING,
      payload: {
        'rating': 3
      }
    };

    const expectedState = {
      articleRating: {
        'rating': 3
      },
      ratingGiven:{},
      ratingError:{}
    };
    expect(ratingReducer(initialState, action)).toEqual(expectedState)
  });

  it('should handle rating errors', () =>{
    const action = {
      type: types.RATING_ERRORS,
      payload: {
        'message': 'you cannot rate your own article'
      }
    };
    const expectedState = {
      articleRating:{},
      ratingGiven: {},
      ratingError: {
        'message': 'you cannot rate your own article'
      }
    };
    expect(ratingReducer(initialState, action)).toEqual(expectedState)
  })
});

