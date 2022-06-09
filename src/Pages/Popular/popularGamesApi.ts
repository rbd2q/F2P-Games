import axios from "axios";

import { CollectionResponse, GamesApiResponse } from "../../types";

export const popularGamesApi = async (genre: string) => {
  const response = await axios.get<CollectionResponse<GamesApiResponse>>(
    `/api/games?sort-by=popularity${genre ? `&category=${genre}` : ""}`
  );

  return response.data;
};
