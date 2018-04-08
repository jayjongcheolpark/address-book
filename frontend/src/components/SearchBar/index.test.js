import React from 'react';
import { mount, shallow } from 'enzyme';

import { SearchBar } from './index';

describe('SearchBar', () => {
  const mockSearchAction = jest.fn();
  const props = {};
  props.searchAction = mockSearchAction;
  const searchBar = shallow(<SearchBar {...props} />);

  it('renders properly', () => {
    expect(searchBar).toMatchSnapshot();
  });
});
