import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middlewares = [];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
