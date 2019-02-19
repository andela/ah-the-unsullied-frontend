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

describe('password reducer', () => {
  it('it should return the initial state', () => {
    expect(passwordResetReducer(initialState, types.PASSWORD_RESET)).toEqual(
      initialState
    );
  });

  it('it should return the initial state', () => {
    expect(passwordResetReducer(initialState, types.PASSWORD_RESET_ERROR)).toEqual(
      initialState
    );
  });
  it('it should return the initial state', () => {
    expect(passwordResetReducer(initialState, types.SEND_EMAIL_ERROR)).toEqual(
      initialState
    );
  });

});