import axios from "axios";

import { CollectionResponse, GamesApiResponse } from "../../types";

export const PCGamesApi = async (genre: string, sort: string) => {
  const response = await axios.get<CollectionResponse<GamesApiResponse>>(
    `/api/games?platform=pc${genre ? `&category=${genre}` : ""}${
      sort ? `&sort-by=${sort}` : ""
    }`
  );

  return response.data;
};
