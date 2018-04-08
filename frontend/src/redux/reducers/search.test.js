import searchReducer from './search';
import { SEARCH } from '../constants/actionTypes';

describe('searchReducer', () => {
  const keyword = 'James';

  it('fetches and sets the keyword', () => {
    expect(searchReducer({}, { type: SEARCH, keyword })).toEqual(keyword);
  });
});
