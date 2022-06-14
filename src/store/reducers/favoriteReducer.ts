import { createSlice } from "@reduxjs/toolkit";

import { getLocalStorage } from "../../utils/localStorage";

const initialState = getLocalStorage("store");

const favoriteSlice = createSlice({
  name: "Favorite Slice",
  initialState,
  reducers: {
    addToFavorite(state, action) {
      state.push(action.payload);
    },
    removeFromFavorite(state, action) {
      state.splice(
        state.findIndex((game) => game.id === action.payload),
        1
      );
    },
  },
});

export default favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
