import { SEARCH } from '../constants/actionTypes';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH: {
      return action.keyword;
    }
    default:
      return state;
  }
};

export default searchReducer;
