import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { SignUp, mapStateToProps } from '../SignUp.js';

  Enzyme.configure({ adapter: new Adapter() });

  describe('Login', () => {
    let props;
    let wrapper;
    let wrapperInstance;
    let state
    beforeEach(() => {
      props = {
        success: {},
        signup: {},
        error: {},
        history: {
          push: jest.fn()
        },
        registerUser: jest.fn(() => {
          Promise.resolve();
        })
      };
      state = {
        signup:{}
      };
      wrapper = shallow(<SignUp {...props} />);
      wrapperInstance = wrapper.instance();
    });
    it('should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should should change state when calling handlechange', () => {
      const event = {
        target: {
          name: 'email',
          value: 'samm@me.com'
        }
      };
      wrapperInstance.handleChange(event);
      expect(wrapperInstance.state.email).toEqual(event.target.value);
    });

    it('should initiate signupUser action on calling handleSubmit', () => {
      const event = {
        preventDefault: jest.fn(),
        target: {
          reset: jest.fn()
        }
      };
      const state = {
        email: 'sam@me.com',
        password: 'emal!2we',
        username: 'sammy'
      };
      wrapperInstance.setState(state);
      wrapperInstance.handleSubmit(event);

      expect(props.registerUser).toHaveBeenCalledWith(state);
    });

    it('Will change route on signup', () => {
      wrapper.setProps({
        signup: {
          user: {
            email: 'sam@gmailcom',
            username: 'sam',
            token: 'wdnmndm,cndnxxxm,cnms,ncm,ns'
          }
        }
      });
      expect(props.history.push).toHaveBeenCalledWith('/login');
    });
    it('Will change route on signup', () => {
      wrapper.setProps({
        signup: {
          user: {
            email: 'sam@gmailcom',
            username: 'sam',
            token: 'wdnmndm,cndnxxxm,cnms,ncm,ns'
          }
        }
      });
      expect(props.history.push).toHaveBeenCalledWith('/login');
    });
    it('mapStateToProps', () => {
      const propsState = mapStateToProps(state);
      expect(propsState.signup).toEqual(state.signup);
    });
  });