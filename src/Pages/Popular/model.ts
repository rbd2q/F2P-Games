import { useQuery, UseQueryResult } from "react-query";

import { GamesApiResponse } from "../../types";
import { popularGamesApi } from "./popularGamesApi";

export const useFetchPopularGames = (
  genre: string
): UseQueryResult<GamesApiResponse[]> =>
  useQuery(["popular games", `genre:${genre}`], () => popularGamesApi(genre));
