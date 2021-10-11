export const isGameInFavoritesSelector = (state, id) => {
  return Object.values(state.favoriteReducer).some((g) => id === g.id)
}

export const commentForGame = (state, gameID) => {
  return Object.values(state.commentsReducer).filter((c) => gameID === c.gameID)
}