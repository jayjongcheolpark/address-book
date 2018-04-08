import React from 'react';
import { shallow } from 'enzyme';

import SideBar from './index';

describe('App', () => {
  const sideBar = shallow(<SideBar />);

  it('renders properly', () => {
    expect(sideBar).toMatchSnapshot();
  });

  it('contains a connected SearchBar', () => {
    expect(sideBar.find('Connect(SearchBar)').exists()).toBe(true);
  });
  it('contains a connected ContactList', () => {
    expect(sideBar.find('Connect(Apollo(ContactList))').exists()).toBe(true);
  });
});
