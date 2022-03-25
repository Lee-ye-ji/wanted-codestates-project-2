import { RANK_RESULT } from '../actions/type';

const initialState = {
  rankConfirm: [],
};

export default function rank(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case RANK_RESULT:
      return {
        ...state,
        rankConfirm: action.rankConfirm,
      };
    default:
      return state;
  }
}
