import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup, { mapStateToProps } from '../SignUp';


Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    registerUser: jest.fn()
  };
  const wrapper = shallow(<Signup {...props} />);
  return {
    props,
    wrapper
  };
}

describe('Signup elements tests', () => {
  it('renders a the signup form elements', () => {
    const { wrapper } = setup();
    expect(wrapper.find('form')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
    expect(wrapper.find('input')).toBeDefined();
    expect(wrapper.find('input')).toBeDefined();
  });
});

describe('Signup', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      success: {},
      errors: {},
      history: {},
      registerUser: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = shallow(<Signup {...props} />);
    return {
      props,
      wrapper
    };
  });
  const state = {
    signup:{},
    errors:{},
    success:{
      signup:{
        success:{}
      }
    }

  }

  describe('<Signup /> snapshot', () => {
    it('should render the create signup page component', () => {
      expect(wrapper).toMatchSnapshot();
    });
 
    it('should mapStateToProps', () => {
      props =mapStateToProps(state);
      expect(props.success).toEqual(state.signup.success);
      expect(props.errors).toEqual(state.signup.errors);
      expect(props.signup).toEqual(state.signup);

    });
 

  });
});
