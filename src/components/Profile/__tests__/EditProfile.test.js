import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { ViewProfile } from '../EditProfile';

Enzyme.configure({ adapter: new Adapter() });

describe('ViewProfile', () => {
  let props;
  let wrapper;
  let wrapperInstance;

  beforeEach(() => {
    props = {
      auth: {
        isAuthenticated: true,
        user: {
          username: 'kwanj',
          email: 'kwanj@gmail.com'
        }
      },
      actions: {
        EditUserProfile: jest.fn(() => {
          Promise.resolve();
        })
      }
    };
    wrapper = shallow(<ViewProfile {...props} />);
    wrapperInstance = wrapper.instance();
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should update state when onchange handler is called', () => {
    const event = {
      target: {
        value: 'yayayayy'
      }
    }
    wrapperInstance.onChange(event);
    expect(wrapperInstance.state.bio).toEqual(event.target.value);
  });
});
