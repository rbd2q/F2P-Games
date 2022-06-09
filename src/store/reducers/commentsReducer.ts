import { getLocalStorage } from "../../utils/localStorage";
import { ADD_COMMENTS, DELETE_COMMENT } from "../constants/actionTypes";

const initialState = getLocalStorage("storeComment");

// TODO
export const commentsReducer = (action, state = initialState) => {
  switch (action?.type) {
    case ADD_COMMENTS:
      // eslint-disable-next-line no-case-declarations
      const newCommentID =
        state.length > 0 ? state[state.length - 1].id + 1 : 1;
      return [...state, { ...action.payload, id: newCommentID }];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload);
    default:
      return state;
  }
};
