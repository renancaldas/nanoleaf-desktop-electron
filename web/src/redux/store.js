/* global window */
import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(
  thunk,
);

export default createStore(reducer, composeEnhancers(middleware));