import { SEARCH_RESULT, SEARCH_SCROLL } from '../actions/type';

const initialState = {
  userList: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        userList: action.userList,
      };
    case SEARCH_SCROLL:
      return {
        ...state,
        userList: action.userList,
      };
    default:
      return state;
  }
}
