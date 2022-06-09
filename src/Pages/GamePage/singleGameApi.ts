import axios from "axios";

import { CollectionResponse, GameApiResponse } from "../../types";

export const singleGameApi = async (id: string) => {
  const response = await axios.get<CollectionResponse<GameApiResponse>>(
    `/api/game?id=${id}`
  );

  return response.data;
};
