import { combineReducers } from "redux";

import commentsReducer from "./commentsReducer";
import favoriteReducer from "./favoriteReducer";

export default combineReducers({
  favoriteReducer,
  commentsReducer,
});
