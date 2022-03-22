import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  logger,
  promiseMiddleware,
  ReduxThunk,
)(createStore);

const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
