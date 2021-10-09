import favoriteReducer from "./favoriteReducer";
import commentsReducer from "./commentsReducer";
import {combineReducers} from "redux";

export default combineReducers({
  favoriteReducer,
  commentsReducer,
});