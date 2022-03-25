import { ADD_COMMENT } from '../actions/type';

const initState = [
  {
    nick: 'BBEESSTT',
    commentList: [
      { id: 'yeji', comment: '응원합니다!' },
      { id: '하이', comment: '반가워' },
    ],
  },
  {
    nick: 'S1주행',
    commentList: [{ id: 'yeji', comment: '오~~' }],
  },
];

export default function comment(state = initState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      const selectCommentList = state.filter(
        (item) => item.nick === action.id,
      )[0].commentList;
      const selectCommentObj = {
        nick: action.id,
        commentList:
          selectCommentList === undefined
            ? [action.commentList]
            : [...selectCommentList, action.commentList],
      };
      const unSelectedCommentState = state.filter(
        (item) => item.nick !== action.id,
      );
      return [...unSelectedCommentState, selectCommentObj];
    default:
      return state;
  }
}
