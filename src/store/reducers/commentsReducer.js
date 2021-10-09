import {ADD_COMMENTS, DELETE_COMMENT} from "../constants/actionTypes";
import {omit} from "lodash";

const initialState = [];

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENTS:
      return {
        ...state,
        ...action.payload
      }
    case DELETE_COMMENT:
      return omit(state, [action.payload])
    default:
      return state;
  }
}

export default commentsReducer;