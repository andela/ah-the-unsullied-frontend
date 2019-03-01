import thunk from 'redux-thunk';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

import * as types from '../actionTypes'
import * as actions from '../ratingActions'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('rating actions', () => {
  it('should generate a postRatingSuccess action on rating', () => {
    const rating = { 'rating': '5' };
    const expectedAction = {
      type: types.POST_RATING,
      payload: rating
    };
    expect(actions.postRatingSuccess(rating)).toEqual(expectedAction);
  });

  it('should generate an addRatingFailed action on rating failure', () => {
    const error_message = {'message': 'You cannot rate your own article'};
    const expectedAction = {
      type: types.RATING_ERRORS,
      payload: error_message
    };
    expect(actions.getRatingErrors(error_message)).toEqual(expectedAction);
  });

  it('should fire a getAverageRatingSuccess action after getting average rating', () => {
    const average_rating = {'rating': '3.5'};
    const expectedAction = {
      type: types.VIEW_AVERAGE_RATING,
      payload: average_rating
    };
    expect(actions.getAverageRatingSuccess(average_rating)).toEqual(expectedAction)
  });

});

describe('rating actions api requests' , () =>{
  beforeEach(function (){
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('posts rating successfully', () => {
    const rating = {'rating': '3'};
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: rating,
      });
});
    const expectedAction = [{
      type: types.POST_RATING,
      payload: rating
    }];

    store.dispatch(actions.postRatingSuccess(rating));
    expect(store.getActions()).toEqual(expectedAction);

  });

  it('gets average rating successfully', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200
      });
    });

    const expectedAction = [{
      type: types.VIEW_AVERAGE_RATING

    }];

    store.dispatch(actions.getAverageRating()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
      expect(actions.getAverageRatingSuccess()).toBeCalled();
    })
  });

  it('gets rating errors', () =>{
    const errors = {
      'message': 'sample error'
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 403,
        errors: errors
      });
    });

    const expectedAction = [ {
      'payload': {
        'rating': '3'
      },
      'type': 'POST_RATING'
    },
      {
        'payload': {
          'message': 'sample error'
        },
        'type': 'RATING_ERRORS'
      }];
    store.dispatch(actions.getRatingErrors(errors));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
