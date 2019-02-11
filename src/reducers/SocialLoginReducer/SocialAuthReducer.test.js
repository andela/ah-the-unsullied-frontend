import testReducer from './SocialAuthReducer';
import {
  FACEBOOK, GOOGLE, TWITTER, FETCH_FAILED, FETCH_CALL, RECEIVE_DATA
} from '../../actions/SocialAuth/SocialAuthTypes';


it('Tests facebook login action will add value in a non-empty state', () =>{
  let state = {
    'language': 'English',
    'nationality': 'Kenyan',
  };
  let passedData = {
    type: FACEBOOK,
    payload: {
      'username': 'Allan Mogusu',
      'email': 'allan@gmail.com'
    }
  };
  expect(testReducer(state, passedData)).toEqual(
    {
      'language': 'English',
      'nationality': 'Kenyan',
      'username': 'Allan Mogusu',
      'email': 'allan@gmail.com'
    }
  );
});

it('Tests Google action updates non-empty state', () => {
  let state = {
    'language': 'English',
    'nationality': 'Kenyan',
  };

  let passedData = {
    type: GOOGLE,
    payload: {
      'username': 'Allan Mogusu',
      'email': 'allan@gmail.com'
    }
  };
  expect(testReducer(state, passedData)).toEqual(
    {
      'language': 'English',
      'nationality': 'Kenyan',
      'username': 'Allan Mogusu',
      'email': 'allan@gmail.com'
    }
  );
});

it('Tests Twitter action will update state', () => {
  let state = {
    'language': 'English',
    'nationality': 'Kenyan',
  };
  let passedData = {
    type: TWITTER,
    payload: {
      'username': 'Allan Mogusu',
      'email': 'allan@gmail.com'
    }
  };
  expect(testReducer(state, passedData)).toEqual(
    {
      'language': 'English',
      'nationality': 'Kenyan',
      'username': 'Allan Mogusu',
      'email': 'allan@gmail.com'
    }
  );

});

it('Test state updated when data is received', () => {
  let state = {};

  let passedData = {
    type: RECEIVE_DATA,
    payload: {
      'username': 'allan',
      'email': 'allan@gmail.com',
      'token': '1234AdgvgAW2'
    }
  };
  expect(testReducer(state, passedData)).toEqual({
    'username': 'allan',
    'email': 'allan@gmail.com',
    'token': '1234AdgvgAW2'
  });

});

it('Test state updated if fetching', () =>{
  let state = {};

  let passedData = {
    type: FETCH_CALL,
    payload: {
      message: 'fetching',
      fetching: true
    }
  };
  expect(testReducer(state, passedData)).toEqual(
    {
      fetching: true,
      message: 'fetching'
    }
  );
});

it('Test state updated if fetch fails', () =>{
  let state = {};

  let passedData = {
    type: FETCH_FAILED,
    payload: {
      message: 'failed',
      fetching: false
    }
  };
  expect(testReducer(state, passedData)).toEqual({
    fetching: false,
    message: 'failed'
  });
});

it('Return empty state by default', () => {
  let state = {};

  let passedData = {
    type: 'NOTHING'
  };
  expect(testReducer(state, passedData)).toEqual(state);
});
