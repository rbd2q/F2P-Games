import { combineReducers } from "redux";

import commentSlice from "./commentsReducer";
import favoriteSlice from "./favoriteReducer";

export default combineReducers({
  favoriteSlice,
  commentSlice,
});
