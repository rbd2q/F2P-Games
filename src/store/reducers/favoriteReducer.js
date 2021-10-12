import {ADD_GAME_TO_FAVORITE, REMOVE_GAME_FROM_FAVORITE} from "../constants/actionTypes";
import {omit} from "lodash";
import {getLocalStorage} from "../../utils/localStorage";

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME_TO_FAVORITE:
      return [...state, {...action.payload}]
    case REMOVE_GAME_FROM_FAVORITE:
      return state.filter((game) => game.id !== action.payload)
    default:
      return state;
  }
}

export default favoriteReducer;