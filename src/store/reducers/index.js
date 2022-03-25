import { combineReducers } from 'redux';
import search from './search';
import rank from './rank';
import comment from './comment';

const reducers = combineReducers({
  search,
  rank,
  comment,
});
export default reducers;
