import React from 'react';
import Enzyme, { shallow} from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import moxios from 'moxios';
import {Resetemail, mapStateToProps} from '../Resetpasswordemail';
import * as types from '../../../../actions/actionTypes'
import passwordResetReducer from '../../../../reducers/passwordResetReducer'

Enzyme.configure({ adapter: new Adapter() });
describe('component', () => {
  let formContainer;
  let props;
  let wrapper;
  let wrapperInstance;
  beforeEach(() => {
    
    props={
      sendemailerr:{
        sendemailerr:{
          sendemailerr:{error:''}
        }
      },
      success:false,
      sendemail:{},
      sendEmail: jest.fn(() => {
        Promise.resolve();
      }),
    }

    wrapper = shallow(<Resetemail {...props} />);
    wrapperInstance = wrapper.instance();
  });
  afterEach(() =>{
    moxios.uninstall();
  });
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should initiate the send email action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
    };
    wrapperInstance.handleSubmit(event);
    expect(props.sendEmail).toHaveBeenCalled();
  });


  it('should change the state when calling handleChange', () => {
    const event = {
      target: {
        id: 'email',
        value: 'kelvin@gmail.com'
      }
    };
    wrapperInstance.handleChange(event);
    expect(wrapperInstance.state.email).toEqual(event.target.value);
  });
  it('should render email form', () => {
    expect(wrapper).toMatchSnapshot();
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
  describe('The mapStateToProps', () => {
    const state = {
      passwordreset: {
        success: false,
        message: '',       
        errors: {
          response: 'This is a response'
        }
      }
    };
    const props = mapStateToProps(state);
    expect(props.success).toEqual(state.passwordreset.success);
    expect(props.response).toEqual(state.passwordreset.response);
  });

});
