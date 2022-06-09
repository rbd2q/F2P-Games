import {
  ADD_COMMENTS,
  ADD_GAME_TO_FAVORITE,
  DELETE_COMMENT,
  REMOVE_GAME_FROM_FAVORITE,
} from "../constants/actionTypes";

export const setGameToFavorite = (game) => ({
  type: ADD_GAME_TO_FAVORITE,
  payload: game,
});

export const removeGameFromFavorite = (gameID) => ({
  type: REMOVE_GAME_FROM_FAVORITE,
  payload: gameID,
});

export const addComments = (comment) => ({
  type: ADD_COMMENTS,
  payload: comment,
});

export const deleteComment = (commentID) => ({
  type: DELETE_COMMENT,
  payload: commentID,
});
