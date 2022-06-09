import { getLocalStorage } from "../../utils/localStorage";
import {
  ADD_GAME_TO_FAVORITE,
  REMOVE_GAME_FROM_FAVORITE,
} from "../constants/actionTypes";

const initialState = getLocalStorage("store");

export const favoriteReducer = (action, state = initialState) => {
  switch (action?.type) {
    case ADD_GAME_TO_FAVORITE:
      return [...state, { ...action.payload }];
    case REMOVE_GAME_FROM_FAVORITE:
      return state.filter((game) => game.id !== action.payload);
    default:
      return state;
  }
};
