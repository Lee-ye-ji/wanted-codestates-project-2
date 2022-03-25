import { ADD_COMMENT } from './type';

export const addComment = (comment, id) => {
  return {
    type: ADD_COMMENT,
    commentList: comment,
    id: id,
  };
};
