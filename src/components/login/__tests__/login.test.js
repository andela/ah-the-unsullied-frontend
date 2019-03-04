import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import {Login} from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  beforeEach(() => {
    props = {
      auth: {},
      loginUser: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = shallow(<Login {...props} />);
    wrapperInstance = wrapper.instance();
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should should change state when calling handlechange', () => {
    const event = {
      target: {
        id: 'email',
        value: 'samm@me.com'
      }
    };
    wrapperInstance.onChange(event);
    expect(wrapperInstance.state.email).toEqual(event.target.value);
  });

  it('should initiate loginUser action on calling handleSubmit', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        reset: jest.fn()
      }
    };
    const state = {
      email: 'sam@me.com',
      password: 'emal!2we'
    };
    wrapperInstance.setState(state);
    wrapperInstance.onSubmit(event);

    expect(props.loginUser).toHaveBeenCalledWith(state);
  });
});