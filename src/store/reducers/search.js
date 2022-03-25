import { SEARCH_RESULT, SEARCH_SCROLL } from '../actions/type';

const initialState = {
  userData: {},
  userList: [],
  rankList: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT:
      return {
        userData: action.userData,
        userList: action.userList,
        rankList: action.rankList,
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
