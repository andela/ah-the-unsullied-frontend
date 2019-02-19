import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import Resetpasswordemail from '../Resetpasswordemail';
import * as types from '../../../../actions/actionTypes'
import passwordResetReducer from '../../../../reducers/passwordResetReducer'

Enzyme.configure({ adapter: new Adapter() });
describe('component', () => {
  let formContainer;
  beforeEach(() => {
    formContainer = shallow(<Resetpasswordemail className='emailform' />);
    moxios.install();
  });
  afterEach(() =>{
    moxios.uninstall();
  });
  it('matches the snapshot', () => {
    expect(formContainer).toMatchSnapshot();
  });
  it('renders form succesfully', () => {
    expect(formContainer.length).toEqual(1);
  });
  it('renders home div succesfully', () => {
    const formContainer2 = shallow(<Resetpasswordemail className="homediv"/>);
    expect(formContainer2.length).toEqual(1);
  });
  it('renders input succesfully', () => {
    const formContainer2 = shallow(<Resetpasswordemail className="input"/>);
    expect(formContainer2.length).toEqual(1);
  });
});

const initialState = {};

describe('password reducer', () => {
  it('it should return the initial state', () => {
    expect(passwordResetReducer(initialState, types.SEND_EMAIL)).toEqual(
      initialState
    );
  });

  it('it should return the initial state', () => {
    expect(passwordResetReducer(initialState, types.PASSWORD_RESET)).toEqual(
      initialState
    );
  });
  it('it should return the initial state', () => {
    expect(passwordResetReducer(initialState, types.SEND_EMAIL_ERROR)).toEqual(
      initialState
    );
  });

});