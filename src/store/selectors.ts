export const isGameInFavoritesSelector = (state, id): boolean =>
  !!state.favoriteSlice.filter((game) => game.id === id).length;

export const commentForGame = (state, gameID) =>
  state.commentSlice.filter((comment) => gameID === comment.gameID);
