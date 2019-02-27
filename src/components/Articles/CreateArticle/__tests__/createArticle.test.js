import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import { MyEditor } from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateArticle', () => {
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
      createArticle: jest.fn(() => {
        Promise.resolve();
      })
    };
    wrapper = shallow(<MyEditor {...props} />);
    wrapperInstance = wrapper.instance();
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should update state when onchange handler is called', () => {
    const event = 'fake bodey';
    wrapperInstance.onHandleChange(event);
    expect(wrapperInstance.state.body).toEqual(event);
  });
  it('should create article when handle submit is called', () => {
    const e = {
      preventDefault: jest.fn()
    };
    const state = {
      title: 'Title',
      description: 'Description',
      body: 'yayayyayayayay',
      tag_list: ['tag']
    };
    wrapperInstance.setState(state);
    wrapperInstance.onHandleSubmit(e);
    expect(props.createArticle).toHaveBeenCalled();
  });
});
