import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Resetpassword from '../Resetpassword';
import * as types from '../../../../actions/actionTypes'
import passwordResetReducer from '../../../../reducers/passwordResetReducer'

Enzyme.configure({ adapter: new Adapter() });
describe('component', () => {
  let formContainer;
  beforeEach(() => {
    formContainer = shallow(<Resetpassword className='emailform' />);
  });
  it('matches the snapshot', () => {
    expect(formContainer).toMatchSnapshot();
  });
  it('renders form succesfully', () => {
    expect(formContainer.length).toEqual(1);
  });
  it('renders home div succesfully', () => {
    const formContainer2 = shallow(<Resetpassword className="homediv"/>);
    expect(formContainer2.length).toEqual(1);
  });
  it('renders input succesfully', () => {
    const formContainer2 = shallow(<Resetpassword className="input"/>);
    expect(formContainer2.length).toEqual(1);
  });

});
const initialState = {};
const password = {
  password: '12345678A!23'
};
const wrongpassword = {
  password: '1234'
};
const email = {
  email: 'unsullieddevs@gmail.com'
};
const wrongemail = {
  email: 'unsullieddevsgmailcom'
};

describe('password reducer', () => {
  it('should change state of success to true when passed with PASSWORD_RESET', () => {
    const action = {
      type: types.PASSWORD_RESET,
      payload: password
    };
    const newState = passwordResetReducer(initialState, action);
    expect(newState.success).toEqual(true);
  });
  it('should change state of success to true when passed with SEND_EMAIL', () => {
    const action = {
      type: types.SEND_EMAIL,
      payload: email
    };
    const newState = passwordResetReducer(initialState, action);
    expect(newState.success).toEqual(true);
  });
  it('should change state of success to false when passed with PASSWORD_RESET_ERROR', () => {
    const action = {
      type: types.PASSWORD_RESET_ERROR,
      payload: wrongpassword
    };
    const newState = passwordResetReducer(initialState, action);
    expect(newState.success).toEqual(false);
  });

  it('should change state of success to false when passed with SEND_EMAIL_ERROR', () => {
    const action = {
      type: types.SEND_EMAIL_ERROR,
      payload: wrongemail
    };
    const newState = passwordResetReducer(initialState, action);
    expect(newState.success).toEqual(false);
  });

});