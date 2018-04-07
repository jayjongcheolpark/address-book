import { SEARCH } from '../constants/actionTypes';

export const search = keyword => ({
  type: SEARCH,
  keyword,
});
