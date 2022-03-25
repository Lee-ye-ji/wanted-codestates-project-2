import { combineReducers } from 'redux';
import search from './search';
import rank from './rank';

const reducers = combineReducers({
  search,
  rank,
});
export default reducers;
