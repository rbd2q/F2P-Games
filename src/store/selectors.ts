// TODO

export const isGameInFavoritesSelector = (state, id) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object.values(state.favoriteReducer).some((g) => id === g.id);
};

export const commentForGame = (state, gameID) =>
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Object.values(state.commentsReducer).filter((c) => gameID === c.gameID);
