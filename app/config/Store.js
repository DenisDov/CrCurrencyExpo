import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './../reducers';

const middleware = [promise, thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const Store = createStore(RootReducer, applyMiddleware(...middleware));

export default Store;
