import { SEARCH_RESULT } from '../actions/type';

const initialState = {};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
