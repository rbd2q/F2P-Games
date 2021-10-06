import {ADD_GAME_TO_FAVORITE, REMOVE_GAME_FROM_FAVORITE} from "../constants/actionTypes";

export const setGameToFavorite = game => ({
  type: ADD_GAME_TO_FAVORITE,
  payload: game,
});

/*export const setGameToFavorite = game => {
  console.log(game);
  return {
    type: ADD_GAME_TO_FAVORITE,
    payload: game,
  }
};*/

export const removeGameFromFavorite = gameID => ({
  type: REMOVE_GAME_FROM_FAVORITE,
  payload: gameID,
});