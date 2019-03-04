import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import {FollowButton, mapStateToProps} from '../FollowButton';


Enzyme.configure({ adapter: new Adapter() });
describe('follow button', () => {
  let props;
  let wrapper;
  let wrapperInstance;
  let state;
  beforeEach(() => {
    props = {
      bio:'i have abio', 
      username:'nesh', 
      image:'hshhshs',

      auth:{
        isAuthenticated:true,
        user:{
          username:'nesh',
        }
      },

      follow: jest.fn(() => {
        Promise.resolve();
      }),
     
    };

    state = {
      auth:{

      },
      
    };
    wrapper = shallow(<FollowButton {...props} />);
    wrapperInstance = wrapper.instance();
  });

  it('should render the follow button', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state when calling handLike', () => {
    const username = 'nesh';
    wrapperInstance.followProfile();
    expect(props.follow).toHaveBeenCalledWith(username);
  });


  it('mapStateToProps', () => {
    const propsState = mapStateToProps(state);
    expect(propsState.auth).toEqual(state.auth);
  });
});