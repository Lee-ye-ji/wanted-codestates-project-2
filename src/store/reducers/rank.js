import {
  RANK_RESULT,
  RANK_ADD_RESULT,
  RANK_SEARCH_RESULT,
} from '../actions/type';

const initialState = {
  rankConfirm: [],
};

export default function rank(state = initialState, action) {
  switch (action.type) {
    case RANK_RESULT:
      return {
        ...state,
        rankConfirm: action.rankConfirm,
      };

    case RANK_ADD_RESULT:
      return {
        ...state,
        rankConfirm: [...state.rankConfirm, ...action.rankConfirm],
      };
    case RANK_SEARCH_RESULT:
      const rankSelect = state.rankConfirm.filter(
        (item) => item.nick === action.rankName,
      );
      return {
        ...state,
        rankConfirm: rankSelect,
      };
    default:
      return state;
  }
}
