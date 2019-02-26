import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Verification, { mapStateToProps } from '../Verification';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    verifyUser: jest.fn()
  };
  const wrapper = shallow(<Verification {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<Verification /> snapshot', () => {
  it('Component should match the snapshot', () => {
    const verifyComponent = shallow(<Verification/>);
    expect(verifyComponent).toMatchSnapshot();
  });
});

describe('Verification elements tests', () => {
  it('renders a the verification elements', () => {
    const { wrapper } = setup();
    expect(wrapper.find('card')).toBeDefined();
    expect(wrapper.find('button')).toBeDefined();
  });
});

describe('Verification', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      verify: {},
      verifyUser: jest.fn()
    };
    wrapper = shallow(<Verification {...props} />);
    return {
      props,
      wrapper
    };
  });
  const state = {
    verifyEmail:{},
  }

  describe('<Signup /> snapshot', () => {
    it('should render the create signup page component', () => {
      expect(wrapper).toMatchSnapshot();
    });
 
    it('should mapStateToProps', () => {
      props = mapStateToProps(state);
      expect(props.verify).toEqual(state.verifyEmail);
    });

  });
});

