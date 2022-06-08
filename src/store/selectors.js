export const isGameInFavoritesSelector = (state, id) =>
  Object.values(state.favoriteReducer).some((g) => id === g.id);

export const commentForGame = (state, gameID) =>
  Object.values(state.commentsReducer).filter((c) => gameID === c.gameID);
