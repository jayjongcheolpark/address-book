import { SEARCH } from '../constants/actionTypes';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH: {
      const newState = action.keyword;
      return newState;
    }
    default:
      return state;
  }
};

export default searchReducer;
