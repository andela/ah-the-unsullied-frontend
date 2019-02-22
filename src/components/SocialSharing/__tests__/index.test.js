import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SocialIcons  from '../shareArticle';
import Icons from '../shareContainer';

Enzyme.configure({ adapter: new Adapter() });

describe('SocialShareIcons: ', () => {
  let icons;
  beforeEach(() => {
    icons = shallow(<SocialIcons title='' />);
  });

  it('renders icons correctly: ', () => expect(icons.exists()).toEqual(true));
  it('renders props passed correctly: ', () => {
    const icons = shallow(<SocialIcons title='how to eat healthfully' />);
    expect(icons.instance().props.title).toBe('how to eat healthfully');
  });
});

describe('Icons: ', () => {
  let socialIcons;
  beforeEach(() => {
    socialIcons = shallow(<Icons shareURL='www.example.com' title='how to eat healthfully'/>);
  });

  it('renders icons: ', () => expect(socialIcons.exists()).toEqual(true));
});
