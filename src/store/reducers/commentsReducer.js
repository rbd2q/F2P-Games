import {ADD_COMMENTS, DELETE_COMMENT} from "../constants/actionTypes";
import {getLocalStorage} from "../../utils/localStorage";

const initialState = getLocalStorage('storeComment');

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      const newCommentID = state.length > 0 ? state[state.length - 1].id + 1 : 1;
      return [...state, {...action.payload, id: newCommentID}]
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.payload)
    default:
      return state;
  }
}

export default commentsReducer;