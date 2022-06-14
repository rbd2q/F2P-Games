import { configureStore } from "@reduxjs/toolkit";

import { setLocalStorage } from "../utils/localStorage";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  setLocalStorage("store", store.getState().favoriteSlice);
  setLocalStorage("storeComment", store.getState().commentSlice);
});

export default store;
