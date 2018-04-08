import { SEARCH } from '../constants/actionTypes';
import { search } from './index';

it('creates an action to search a name from contacts', () => {
  const keyword = 'James';
  const expectedAction = { type: SEARCH, keyword };

  expect(search(keyword)).toEqual(expectedAction);
});
