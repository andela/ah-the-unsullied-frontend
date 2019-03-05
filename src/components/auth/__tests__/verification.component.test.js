import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { Verification, mapStateToProps } from '../Verification';

Enzyme.configure({ adapter: new Adapter() });
describe('verification', () => {
  let props;
  let wrapper;
  let state;
  beforeEach(() => {
    props = {
      verify: 'sa@gmail.com',
      match: {
        params: {
          token: 'fjdsafjkdajkfjkjkvdjskaahjsdhsjfhjkhgdsjfdfhsdjkhajkfhgrlk'
        }
      },
      verifyUser: jest.fn(() => {
        Promise.resolve();
      })
    };
    state = {
      verifyEmail: 'sam@gmail.com'
    };
    wrapper = shallow(<Verification {...props} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('mapStateToProps', () => {
    const propsState = mapStateToProps(state);
    expect(propsState).toEqual({ verify: 'sam@gmail.com' });
  });
});
